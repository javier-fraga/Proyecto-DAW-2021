import { useEffect, useRef, useState } from 'react';
import './ventanaEditar.scss';
import Select from 'react-select';

const VentanaEditar = ({ setDatosEditar, columnas, datosEditar , titulo, enviarDatos, tiendas }) => {

    const ref= useRef(null);
    const [valores,setValores] = useState({...datosEditar});
    const [multiSelect, setMultiSelect] = useState (false);
    const [mensajeError, setMensajeError] = useState();

    const crearElemento = (tipo, idElemento) => {
        let elemento;
        let datos = datosEditar[idElemento];
        switch(tipo){
            case 'campo':
                if(datos){
                    elemento = document.createElement('div');
                    elemento.className = 'ventana_editar_formulario_campo';
                }
                else{
                    elemento = document.createElement('input');
                    elemento.className = 'ventana_editar_formulario_campo';
                    elemento.oninput = e => modificarCampo(e.target.value,idElemento);
                }   
                elemento.innerHTML = datos;
                return elemento;
            case 'edit':
                elemento = document.createElement('input');
                elemento.className = 'ventana_editar_formulario_campo';
                elemento.oninput = e => modificarCampo(e.target.value,idElemento);
                if(datos)
                    elemento.value = datos;
                return elemento;
            case 'editNumero':
                elemento = document.createElement('input');
                elemento.className = 'ventana_editar_formulario_campo';
                elemento.oninput = e => modificarCampo(e.target.value,idElemento);
                elemento.onkeydown= (event) => {return isNumber(event)};
                if(datos)
                    elemento.value = datos;
                return elemento;
            case 'stock':
                elemento = document.createElement('div');
                elemento.className = 'ventana_editar_formulario_campo';
                let template = `Actual: ${ datos } + <input maxlength="3" id='input' placeholder='Stock' ` + 
                  `class = 'ventana_editar_formulario_campo_numerico';></input> stock a solicitar` ;
                elemento.innerHTML = template;
                elemento.onkeydown= (event) => {return isNumber(event)};
                elemento.oninput= e => modificarCampo(e.target.value, idElemento) ;
                elemento.value = {datos};
                return elemento;
            case 'desplegable':
                return null;
            case 'desplegableMulti':
                setMultiSelect(true);
                return null;
        }
    }

    const modificarCampo = (valor, idElemento) => {
        let tmpValores = valores;
        tmpValores[idElemento] = valor;
        setValores(tmpValores);
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
        if(ref){
            columnas.forEach(columna => {
                if(columna.id){
                    let elemento = document.createElement('label');
                    elemento.innerHTML = columna.name;
                    ref.current.appendChild(elemento);
                        elemento = crearElemento(columna.tipo, columna.id);
                        if (elemento)
                          ref.current.appendChild(elemento);

    
                }      
            });
        }

    },[])

    const comprobarValores = () => {
        if(Object.keys(valores).length < columnas.length -2)
          return 'No puede haber campos vacios';
        if(JSON.stringify(valores) === JSON.stringify(datosEditar))
          return 'No se ha modificado ningún dato';
        for (var prop in valores){
            if(prop === 'email')
                if(!valores[prop].match(/^[a-z]{2,10}\.[a-z]{2,10}@todociclos.es$/))
                    return 'El correo debe ser nombre.apellido@todociclos.es';
            if(valores[prop] === '' && prop !== 'id')
                return 'No puede haber campos vacios';
        }
        return false;
    }
    
    const submit = () => {
        console.log(valores);
        let error = comprobarValores()
        setMensajeError(error);
        if(!error){
            enviarDatos(valores);
            setDatosEditar(null);
        }
    }
    
    console.log(valores);
    return (
      <div className='ventana_editar'>
        <div className='ventana_editar_formulario' ref={ref}>
            <div className= 'ventana_editar_formulario_titulo'>
                {titulo}   
            </div>
            {tiendas && 
                !multiSelect && <Select options = { tiendas } className= 'ventana_editar_formulario_select' getOptionValue = { option => option.id} onChange = {e => modificarCampo(e,'tienda')}
                    getOptionLabel= {option => option.direccion} menuPlacement = 'top' defaultValue = {datosEditar.tienda}/>
            }
            {multiSelect && <Select options = { tiendas } className= 'ventana_editar_formulario_select' getOptionValue = { option => option.id} onChange = {e => modificarCampo(e,'tienda')}
                    getOptionLabel= {option => option.direccion} menuPlacement = 'top' defaultValue = {datosEditar.tienda} isMulti/>}
            <div className='ventana_editar_formulario_error'> {mensajeError} </div>
            <div className='ventana_editar_formulario_botones'>
                <button onClick={submit} disabled = {valores.length < 1}>Confirmar</button>
                <button onClick={()=>setDatosEditar(null)}>Volver</button>
            </div>
        </div>
      </div>
    )
}

export default VentanaEditar;