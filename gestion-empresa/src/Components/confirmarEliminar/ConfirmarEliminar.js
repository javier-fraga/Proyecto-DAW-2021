import './confirmarEliminar.scss';

const  ConfirmarEliminar = ({ setBorrar, borrarDatos }) => {
    return(
        <div className= 'ventana_confirmar'>
            <div className= 'ventana_confirmar_formulario'>
                ¿Seguro que quiere borrar los datos?
                    <div className= 'ventana_confirmar_formulario_botones'>
                        <button onClick = {() => borrarDatos()}>Confirmar</button>
                        <button onClick = {() => setBorrar(null)} >Cancelar</button>
                    </div>
            </div>
        </div>
    )
}

export default ConfirmarEliminar;