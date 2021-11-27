import { useEffect, useState } from "react";
import Lista from "../../Components/lista/Lista";
import VentanaEditar from "../../Components/ventanaEditar/VentanaEditar";
import { getProductos } from "../../Services/httpCalls";
import Select from 'react-select';

const GestionProductos = () =>{

    const [datos,setDatos] = useState([]);
    const [datosEditar, setDatosEditar] = useState(null);
    const titulo = 'Gestion de productos';

    const customStyles = {
        menu:(styles,{
        }) =>{
            return {
                ...styles,
                width: '200px',
                zindex:'20'
             };
        },
        option: (styles, {
        }) => {
           return {
              ...styles,
              color: 'black',
              width: '200px'
           };
        },
     };

    const columnas = [
        {
            id:'nombre',
            name: 'Producto',
            selector: row => row.nombre,
            sortable: true,
            tipo: 'campo',
            filtro: true,
            maxWidth:'20vw',
            grow:1
        },
        {
            id:'descripcion',
            name: 'Descripción',
            selector: row => row.descripcion,
            tipo: 'campo',
            filtro: true,
            maxWidth:'50vw',
            grow:3
        },
        {
            id:'precio',
            name: 'Precio',
            selector: row => row.precio,
            sortable: true,
            tipo: 'campo',
            grow:0
        },
        {
            id:'tiendas',
            name: 'Tiendas',
            cell: (row) => <Select style = {{zindex:2000}} placeholder='Tiendas' menuPlacement = 'auto' styles={customStyles}
              options ={row.tiendas} getOptionLabel = {option => option.direccion} isOptionDisabled = {() => true}/>,
            grow:0,
            width: "300px"
        },
        {
            cell: (row) => <div className='editar' onClick={()=>setDatosEditar(row)}/>,
            ignoreRowClick: true,
            allowRowEvents: true,
            grow:0
        },
        {
            cell: (row) => <div className='borrar'/>,
            ignoreRowClick: true,
            allowRowEvents: true,
            grow:0
        },
    ]

    useEffect(()=>{
        let datosTemp = [];
        getProductos()
        .then( data => data.json())
        .then( data => {data.forEach( item =>{
            let tiendas = [];
            item.stocks.forEach(stock => tiendas.push(stock.tienda));
            datosTemp.push(
                {
                    "id": item.id,
                    "nombre": item.nombre,
                    "descripcion": item.descripcion,
                    "precio": item.precio,
                    "tiendas": tiendas
                }
            )
            console.log(tiendas);
            })     
            setDatos(datosTemp);
        });

    },[]);

    const enviarDatos = () => {
        
    }

    return(
        <div className= 'solicitudes'>
            <div className='solicitudes_lista'>
                {datos.length !=0 && <Lista columns = { columnas } datos = { datos } titulo = { titulo }/>}
            </div>
            {datosEditar && <VentanaEditar columnas = { columnas } titulo = { titulo }
              datosEditar= { datosEditar } setDatosEditar={ setDatosEditar } enviarDatos = {enviarDatos}/>}
        </div>     
    )
}

export default GestionProductos;