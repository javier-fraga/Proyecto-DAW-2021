import { useState } from "react";
import Lista from "../../Components/lista/Lista";
import VentanaEditar from "../../Components/ventanaEditar/VentanaEditar";

const GestionTiendas = ({ tiendas }) =>{

    const [datosEditar, setDatosEditar] = useState(null);
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
            tipo: 'edit',
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
            cell: (row) => <div className='borrar'/>,
            ignoreRowClick: true,
            allowRowEvents: true,
            grow:0
        },
    ]

    const enviarDatos = () => {
        
    }

    return(
        <div className= 'solicitudes'>
            <div className='solicitudes_lista'>
              <Lista columns = { columnas } datos = { tiendas } titulo = { titulo } setDatosEditar ={ setDatosEditar }/>
            </div>
            {datosEditar && <VentanaEditar columnas = { columnas } titulo = { titulo }
              datosEditar= { datosEditar } setDatosEditar={ setDatosEditar } enviarDatos = {enviarDatos}/>}
        </div>     
    )
}

export default GestionTiendas;