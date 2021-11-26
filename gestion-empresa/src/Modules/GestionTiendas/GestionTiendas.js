import { useEffect, useState } from "react";
import Lista from "../../Components/lista/Lista";
import VentanaEditar from "../../Components/ventanaEditar/VentanaEditar";
import { getTiendas } from "../../Services/httpCalls";

const GestionTiendas = () =>{

    const [datos,setDatos] = useState([]);
    const [datosEditar, setDatosEditar] = useState(null);
    const titulo = 'Gestion de tiendas';

    const columnas = [
        {
            id:'ciudad',
            name: 'Ciudad',
            selector: row => row.ciudad,
            sortable: true,
            tipo: 'campo',

        },
        {
            id:'direccion',
            name: 'Dirección',
            selector: row => row.direccion,
            sortable:true,
            tipo: 'campo',
        },
        {
            id:'cp',
            name: 'Codigo Postal',
            selector: row => row.cp,
            sortable: true,
            tipo: 'campo',
            grow: 2,

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
        getTiendas()
        .then( data => data.json())
        .then( data => {data.forEach( tienda =>{
            datosTemp.push(
                {
                    "id": tienda.id,
                    "ciudad": tienda.ciudad,
                    "direccion": tienda.direccion,
                    "cp": tienda.cp,

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

export default GestionTiendas;