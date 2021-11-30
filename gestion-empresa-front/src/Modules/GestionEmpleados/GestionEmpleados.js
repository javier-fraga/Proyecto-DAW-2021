import { useEffect, useState } from "react";
import ConfirmarEliminar from "../../Components/confirmarEliminar/ConfirmarEliminar";
import Lista from "../../Components/lista/Lista";
import VentanaEditar from "../../Components/ventanaEditar/VentanaEditar";
import { createUserWithEmailAndPassword } from "../../Services/firebase";
import { getEmpleados, modificarEmpleado, newEmpleado , borrarEmpleado } from "../../Services/httpCalls";

const GestionEmpleados = ({ tiendas }) =>{

    const [datos,setDatos] = useState([]);
    const [datosEditar, setDatosEditar] = useState(null);
    const [borrar,setBorrar] = useState();
    const [recargarEmpleados, setRecargarEmpleados] = useState(false);
    const titulo = 'Gestion de empleados';
    const columnas = [
        {
            id:'nombre',
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
            tipo: 'edit',
            filtro: true,
            maxWidth: '20vw'
        },
        {
            id:'apellidos',
            name: 'Apellidos',
            selector: row => row.apellidos,
            sortable:true,
            tipo: 'edit',
            filtro: true,
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
            filtro: true,
            tipo: 'edit',
            maxWidth: '20vw'
        },
        {
            id:'tienda',
            name: 'Tienda',
            selector: row => row.tienda.direccion,
            sortable: true,
            tipo: 'desplegable',
            filtro: true,
            grow:2,
            maxWidth: '20vw'
        },
        {
            cell: (row) => <div className='editar' onClick={()=>setDatosEditar(row)}/>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            allowRowEvents: true,
            grow:0
        },
        {
            cell: (row) => <div className='borrar' onClick={()=>setBorrar(row)}/>,
            ignoreRowClick: true,
            allowRowEvents: true,
            grow:0
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
                    "tienda": empleado.tienda,
                }
            )
            })
            setDatos(datosTemp);
        });

    },[recargarEmpleados]);

    const enviarDatos = (datos) => {
        console.log(datos);
        if(datos.id === ''){
            console.log(datos.email);
            newEmpleado(datos);
            createUserWithEmailAndPassword(datos.email);
        }else{
            modificarEmpleado(datos);
        }
        setRecargarEmpleados(!recargarEmpleados);
    }

    const borrarDatos = () => {
        borrarEmpleado(borrar);
        setBorrar(null);
        setRecargarEmpleados(!recargarEmpleados);
    }

    return(
        <div className= 'solicitudes'>
            <div className='solicitudes_lista'>
                {datos.length !=0 && <Lista columns = { columnas } datos = { datos } titulo = { titulo } setDatosEditar = { setDatosEditar }/>}
            </div>
            {datosEditar && <VentanaEditar columnas = { columnas } titulo = { titulo } tiendas = { tiendas }
              datosEditar= { datosEditar } setDatosEditar={ setDatosEditar } enviarDatos = {enviarDatos} />}
            {borrar && <ConfirmarEliminar setBorrar = { setBorrar } borrarDatos = { borrarDatos }/>}
        </div>     
    )
}

export default GestionEmpleados;