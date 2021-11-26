import { useEffect, useRef, useState } from 'react';
import './ventanaEditar.scss'

const VentanaEditar = ({ setDatosEditar, columnas, datosEditar , titulo, enviarDatos }) => {

    const ref= useRef(null);
    const [valores,setValores] = useState('');

    /*
    const cerrarVentana = (e) => {
        if(ref.current && !ref.current.contains(e.target)){
            setDatosEditar(null);
        }
         
    }
    */

    const crearElemento = (tipo, datos) => {
        let elemento;
        switch(tipo){
            case 'campo':
                elemento = document.createElement('div');
                elemento.className = 'ventana_editar_formulario_campo';
                elemento.innerHTML = datos;
                return elemento;
            case 'numberInput':
                elemento = document.createElement('div');
                elemento.className = 'ventana_editar_formulario_campo';
                let template = `Actual: ${ datos } + <input maxlength="3" id='input' placeholder='Stock' ` + 
                  `class = 'ventana_editar_formulario_campo_numerico';></input> stock a solicitar` ;
                elemento.innerHTML = template;
                elemento.onkeydown= (event) => {return isNumber(event)};
                elemento.oninput= e => setValores(e.target.value) ;
                elemento.value = datos;
                return elemento;
        }
    }

    function isNumber(event) {
        event = (event) ? event : window.event;
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        console.log(columnas);
        console.log(datosEditar);
        console.log(ref);
        columnas.forEach(columna => {
            if(columna.id){
                let elemento = document.createElement('label');
                elemento.innerHTML = columna.name;
                ref.current.appendChild(elemento);
                
                elemento = crearElemento(columna.tipo, datosEditar[columna.id.toLowerCase()]);
                ref.current.appendChild(elemento);
            }      
        });
        /*
        document.addEventListener('click', cerrarVentana);
        return () => {
            document.removeEventListener('click', cerrarVentana);
        }
        */
    },[])
    
    const submit = () => {
        enviarDatos(valores);
        setDatosEditar(null);
    }
    
    useEffect(()=>{console.log(valores);},[valores])
    return (
      <div className='ventana_editar'>
        <div className='ventana_editar_formulario' ref={ref}>
            <div className= 'ventana_editar_formulario_titulo'>
                {titulo}
            </div>
            <div className='ventana_editar_formulario_botones'>
                <button onClick={submit} disabled = {valores.length < 1}>Confirmar</button>
                <button onClick={()=>setDatosEditar(null)}>Volver</button>
            </div>
        </div>
      </div>
    )
}

export default VentanaEditar;