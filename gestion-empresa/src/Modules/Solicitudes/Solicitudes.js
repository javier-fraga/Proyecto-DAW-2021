import { useEffect, useState } from 'react'
import Lista from '../../Components/lista/Lista';
import VentanaEditar from '../../Components/ventanaEditar/VentanaEditar';
import { getProductosByTienda, newSolicitud } from '../../Services/httpCalls';
import './solicitudes.scss'

const Solicitudes = ({user}) =>{

    const [datos,setDatos] = useState([]);
    const [datosEditar, setDatosEditar] = useState(null);
    const titulo = 'Solicitar stock';

    const columnas = [
        {
            id:'nombre',
            name: 'Producto',
            selector: row => row.nombre,
            sortable: true,
            tipo: 'campo',
            filtro: true
        },
        {
            id:'descripcion',
            name: 'Descripción',
            selector: row => row.descripcion,
            tipo: 'campo',
            filtro: true
        },
        {
            id:'precio',
            name: 'Precio',
            selector: row => row.precio,
            sortable: true,
            tipo: 'campo'
        },
        {
            id:'cantidad',
            name: 'Cantidad',
            selector: row => row.cantidad,
            sortable: true,
            tipo: 'stock'
        },
        {
            cell: (row) => <div className='editar' onClick={()=>setDatosEditar(row)}/>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            allowRowEvents: true
        },
    ]

    useEffect(()=>{
        if (user){
            let datosTemp = [];
            getProductosByTienda(user.tienda.id)
            .then( data => data.json())
            .then( data => {data.forEach( item =>{
                console.log(item);
                datosTemp.push(
                    {
                        "id": item.id,
                        "nombre": item.nombre,
                        "descripcion": item.descripcion,
                        "precio": item.precio,
                        "cantidad": item.stocks.filter(s => s.tienda.id === user.tienda.id)[0].cantidad
                    }
                )
                })
                setDatos(datosTemp);
            });
        }

    },[user]);

    const enviarDatos = (datos) => {
        newSolicitud(user,datos)
    }

    return(
        <div className= 'solicitudes'>
            <div className='solicitudes_lista'>
                {datos.length !=0 && <Lista columns = { columnas } datos = { datos } titulo = { titulo } noNuevo = { true }/>}
            </div>
            {datosEditar && <VentanaEditar columnas = { columnas } titulo = { titulo }
              datosEditar= { datosEditar } setDatosEditar={ setDatosEditar } enviarDatos = {enviarDatos}/>}
        </div>     
    )
}

export default Solicitudes;