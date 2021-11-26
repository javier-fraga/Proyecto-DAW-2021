import { useEffect, useState } from "react";
import Lista from "../../Components/lista/Lista";
import VentanaEditar from "../../Components/ventanaEditar/VentanaEditar";
import { getEmpleados } from "../../Services/httpCalls";

const GestionEmpleados = () =>{

    const [datos,setDatos] = useState([]);
    const [datosEditar, setDatosEditar] = useState(null);
    const titulo = 'Gestion de empleados';
    const columnas = [
        {
            id:'nombre',
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
            tipo: 'campo',
            maxWidth: '20vw'
        },
        {
            id:'apellidos',
            name: 'Apellidos',
            selector: row => row.apellidos,
            sortable:true,
            tipo: 'campo',
            maxWidth: '20vw'
        },
        {
            id:'email',
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            tipo: 'campo',
            grow: 2,
            maxWidth: '20vw'
        },
        {
            id:'puesto',
            name: 'Puesto',
            selector: row => row.puesto,
            sortable: true,
            tipo: 'numberInput',
            maxWidth: '20vw'
        },
        {
            id:'tienda',
            name: 'Tienda',
            selector: row => row.tienda,
            sortable: true,
            tipo: 'numberInput',
            grow:2,
            maxWidth: '20vw'
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
        let datosTemp = [];
        getEmpleados()
        .then( data => data.json())
        .then( data => {data.forEach( empleado =>{
            datosTemp.push(
                {
                    "id": empleado.id,
                    "nombre": empleado.nombre,
                    "apellidos": empleado.apellidos,
                    "email": empleado.email,
                    "puesto": empleado.puesto,
                    "tienda": empleado.tienda.direccion,
                }
            )
            })
            setDatos(datosTemp);
        });

    },[]);

    const enviarDatos = () => {
        
    }

    return(
        <div className= 'solicitudes'>
            <div className='solicitudes_lista'>
                {datos.length !=0 && <Lista columns = { columnas } datos = { datos }/>}
            </div>
            {datosEditar && <VentanaEditar columnas = { columnas } titulo = { titulo }
              datosEditar= { datosEditar } setDatosEditar={ setDatosEditar } enviarDatos = {enviarDatos}/>}
        </div>     
    )
}

export default GestionEmpleados;