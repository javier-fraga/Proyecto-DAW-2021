import { useState } from "react";
import ConfirmarEliminar from "../../Components/confirmarEliminar/ConfirmarEliminar";
import Lista from "../../Components/lista/Lista";
import VentanaEditar from "../../Components/ventanaEditar/VentanaEditar";
import { borrarTienda, modificarTienda, newTienda } from "../../Services/httpCalls";

const GestionTiendas = ({ tiendas, recargarTiendas }) =>{

    const [datosEditar, setDatosEditar] = useState(null);
    const [borrar,setBorrar] = useState();
    const titulo = 'Gestion de tiendas';

    const columnas = [
        {
            id:'ciudad',
            name: 'Ciudad',
            selector: row => row.ciudad,
            sortable: true,
            filtro: true,
            tipo: 'edit',

        },
        {
            id:'direccion',
            name: 'Dirección',
            selector: row => row.direccion,
            sortable:true,
            filtro: true,
            tipo: 'edit',
        },
        {
            id:'cp',
            name: 'Codigo Postal',
            selector: row => row.cp,
            sortable: true,
            tipo: 'editNumero',
            filtro: true,

        },
        {
            cell: (row) => <div className='editar' onClick={()=>setDatosEditar(row)}/>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            allowRowEvents: true,
            grow:0,
        },
        {
            cell: (row) => <div className='borrar' onClick={()=>setBorrar(row)}/>,
            ignoreRowClick: true,
            allowRowEvents: true,
            grow:0
        },
    ]
    const enviarDatos = (datos) => {
        if(datos.id === ''){
            newTienda(datos);
        }else{
            modificarTienda(datos);
        }
        recargarTiendas();
    }

    const borrarDatos = () => {
        borrarTienda(borrar);
        setBorrar(null);
        recargarTiendas();
    }

    return(
        <div className= 'solicitudes'>
            <div className='solicitudes_lista'>
              <Lista columns = { columnas } datos = { tiendas } titulo = { titulo } setDatosEditar ={ setDatosEditar }/>
            </div>
            {datosEditar && <VentanaEditar columnas = { columnas } titulo = { titulo }
              datosEditar= { datosEditar } setDatosEditar = { setDatosEditar } enviarDatos = { enviarDatos }/>}
            {borrar && <ConfirmarEliminar setBorrar = { setBorrar } borrarDatos = { borrarDatos }/>}
        </div>     
    )
}

export default GestionTiendas;