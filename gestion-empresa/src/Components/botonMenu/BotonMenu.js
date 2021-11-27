import { useEffect, useRef } from 'react';
import './botonMenu.scss';

const BotonMenu = ({ toggleMenu, abrir }) => {

    const ref = useRef(null);

    useEffect(()=>{
        if(ref)
            ref.current.classList.toggle('cerrar')
    },[ abrir ])

    return(
        <div className='boton' onClick= {toggleMenu} ref = { ref }/>
    )
}

export default BotonMenu;