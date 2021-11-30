import { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import Filtro from '../filtro/Filtro';
import './lista.scss'

const Lista = ({ columns, datos , titulo, noNuevo, setDatosEditar })=>{

    const customStyles = {
        table: {
            style: {
                height:'73vh',
            },
        },
        subHeader: {
            style: {
                height: '14vh',
            },
        },
        rows: {
            style: {
                minHeight: '72px',
               // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    const [filterText, setFilterText] = useState([]);
	const [filteredItems, setFilteredItems] = useState();



    const filtro = () => {
        let datosFiltrados = datos;
        filterText.forEach(filter => {
            datosFiltrados = datosFiltrados.filter(
                item =>  item[filter.campo].toString().toLowerCase().includes(filter.text.toLowerCase()),
            )
        });
        setFilteredItems(datosFiltrados);
    }

    const filtrado = (value,index) => {
        let items = [...filterText];
        let item = [...filterText][index];
        item.text = value;
        items[index] = item;
        setFilterText( items )
    }

	const subHeaderComponentMemo = useMemo(() => {
        filtro()
        let filtros = [];  
        if(filterText.length !== 0){
            let index = 0;
            columns.forEach((element) => {
                if(element.filtro){
                    filtros.push(<Filtro filter = { filtrado } filterText={ filterText } placeholder = {`Filtrar por ${element.id}`} index = {index }/>)
                    index++;
                }
            });
            return (
                <div className = 'lista_cabecera'>
                    <div className= 'lista_cabecera_titulo'>
                        { titulo }
                    </div>
                    { filtros }
                    {!noNuevo && <div className = 'lista_cabecera_nuevo' onClick = { () => setDatosEditar({id:''}) }>
                        Nuevo
                    </div>}
                </div>
            );
        }
	}, [filterText, datos]);

    useEffect(() => {
        let filtros = [];  
        columns.forEach((element) => {   
            if(element.filtro){
                filtros.push(
                    {
                        campo: element.id,
                        text: ''
                    }
                )
            
            }
        });
        setFilterText(filtros);
    },[])

    return(
        <div className='lista'>
            <DataTable 
            columns = { columns}
            data = { filteredItems }
            subHeader
			subHeaderComponent= {subHeaderComponentMemo}
            fixedHeader
            customStyles = {customStyles}
            responsive= 'true'
            />
        </div>
    )
} 

export default Lista;