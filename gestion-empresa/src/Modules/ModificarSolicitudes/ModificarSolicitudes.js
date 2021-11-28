import { useEffect, useState } from 'react'
import Lista from '../../Components/lista/Lista';
import VentanaEditar from '../../Components/ventanaEditar/VentanaEditar';
import { getSolicitudes } from '../../Services/httpCalls';

const ModificarSolicitudes = ({user}) =>{

    const [datos,setDatos] = useState([]);
    const [datosEditar, setDatosEditar] = useState(null);
    const titulo = 'Consultar solicitudes stock';

    const columnas = [
        {
            id:'producto',
            name: 'Producto',
            selector: row => row.producto,
            sortable: true,
            filtro: true,
            tipo: 'campo',

        },
        {
            id:'tienda',
            name: 'Tienda',
            selector: row => row.tienda,
            filtro: true,
            tipo: 'campo',

        },
        {
            id:'empleado',
            name: 'Empleado',
            selector: row => row.empleado,
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
            getSolicitudes(user.tienda.id)
            .then( data => data.json())
            .then( data => { console.log(data);data.forEach( item =>{
                console.log(item);
                datosTemp.push(
                    {
                        "id": item.id,
                        "producto": item.producto.nombre,
                        "tienda": item.tienda.direccion,
                        "empleado": item.empleado.email,
                        "cantidad": item.cantidad

                    }
                )
                })
                setDatos(datosTemp);
            });
        }

    },[user]);

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

export default ModificarSolicitudes;