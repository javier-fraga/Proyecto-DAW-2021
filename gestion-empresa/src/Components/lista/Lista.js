import { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import Filtro from '../filtro/Filtro';
import './lista.scss'

const Lista = ({ columns, datos , titulo, noNuevo })=>{
    console.log(columns);
    console.log(datos);

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
            console.log(datosFiltrados);
            datosFiltrados = datosFiltrados.filter(
                item =>  item[filter.campo].toString().toLowerCase().includes(filter.text.toLowerCase()),
            )
        });
        console.log(datosFiltrados);
        setFilteredItems(datosFiltrados);
    }

    const filtrado = (value,index) => {
        let items = [...filterText];
        console.log(index);
        let item = [...filterText][index];
        item.text = value;
        items[index] = item;
        setFilterText( items )
    }

	const subHeaderComponentMemo = useMemo(() => {
        filtro()
        let filtros = [];  
        if(filterText.length !== 0){
            console.log(filterText);
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
                    {!noNuevo && <div className = 'lista_cabecera_nuevo'>
                        Nuevo
                    </div>}
                </div>
            );
        }
	}, [filterText]);

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

    console.log(filteredItems);

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