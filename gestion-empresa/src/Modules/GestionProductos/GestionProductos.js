import { useEffect, useState } from "react";
import Lista from "../../Components/lista/Lista";
import VentanaEditar from "../../Components/ventanaEditar/VentanaEditar";
import { getProductos, borrarProducto , newProducto, modificarProducto} from "../../Services/httpCalls";
import Select from 'react-select';
import ConfirmarEliminar from "../../Components/confirmarEliminar/ConfirmarEliminar";

const GestionProductos = ({ tiendas }) =>{

    const [datos,setDatos] = useState([]);
    const [datosEditar, setDatosEditar] = useState(null);
    const [borrar,setBorrar] = useState();
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
            tipo: 'edit',
            filtro: true,
            maxWidth: '20vw',
            grow:1
        },
        {
            id:'descripcion',
            name: 'Descripción',
            selector: row => row.descripcion,
            tipo: 'edit',
            filtro: true,
            maxWidth: '50vw',
            grow:3
        },
        {
            id:'precio',
            name: 'Precio',
            selector: row => row.precio,
            sortable: true,
            tipo: 'edit',
            grow:0
        },
        {
            id:'tiendas',
            name: 'Tiendas',
            cell: (row) => <Select style = {{zindex:2000}} placeholder='Tiendas' menuPlacement = 'auto' styles={customStyles}
              options ={row.tiendas} getOptionLabel = {option => option.direccion} isOptionDisabled = {() => true}/>,
            grow:0,
            tipo: 'desplegable',
            width: '300px'
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
        if(datos.id === ''){
            newProducto(datos);
        }else{
            modificarProducto(datos);
        }
    }

    const borrarDatos = () => {
        borrarProducto(borrar);
        setBorrar(null);
    }

    return(
        <div className= 'solicitudes'>
            <div className='solicitudes_lista'>
                {datos.length !=0 && <Lista columns = { columnas } datos = { datos }
                  titulo = { titulo } setDatosEditar ={ setDatosEditar }/>}
            </div>
            {datosEditar && <VentanaEditar columnas = { columnas } titulo = { titulo }  tiendas = { tiendas }
              datosEditar= { datosEditar } setDatosEditar ={ setDatosEditar } enviarDatos = {enviarDatos}/>}
            {borrar && <ConfirmarEliminar setBorrar = { setBorrar } borrarDatos = { borrarDatos }/>}
        </div>     
    )
}

export default GestionProductos;