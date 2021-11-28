import { useEffect, useRef } from 'react';
import './botonMenu.scss';

const BotonMenu = ({ toggleMenu, abrir }) => {

    const ref = useRef(null);

    useEffect(()=>{
        if(ref)
            if(!abrir)
                ref.current.classList.remove('cerrar');
            else
                ref.current.classList.add('cerrar');
    },[ abrir ]);

    return(
        <div className='boton' onClick= {toggleMenu} ref = { ref }/>
    )
}

export default BotonMenu;