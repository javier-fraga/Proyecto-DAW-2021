import React, { useEffect, useRef } from 'react'
import 'firebase/auth';
import './navBar.scss';
import { useNavigate } from 'react-router';

function NavBar({ user, toggleMenu }) {

  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClickFuera = (e) => {
    if(ref.current && !ref.current.contains(e.target))
      toggleMenu();
  }

  useEffect(() => {
    document.addEventListener('click', handleClickFuera);
    return () => {
      document.removeEventListener('click', handleClickFuera);
    }
  },[])

  const redireccionar = (ruta) => {
    toggleMenu();
    navigate(ruta,{replace: true});
  }

  const comprobarPuesto = (puesto) =>{

    if(puesto === user.puesto || user.puesto === 'Admin')
     return true;
    if(puesto === '')
      if(user.puesto === 'Recursos humanos')
        return false;
      else
        return true;
    return false;
    

  }


  return (
        <div className="container" ref = {ref} >
            {comprobarPuesto('') &&<div onClick = {() =>redireccionar('/solicitudes')}>Solicitudes</div>}
            {comprobarPuesto('') &&<div onClick = {() =>redireccionar('/solicitudes/consultar')}>Consultar solicitudes</div>}
            {comprobarPuesto('Recursos humanos') &&<div onClick = {() =>redireccionar('/empleados')}>Gestionar Empleados</div>}
            {comprobarPuesto('Directivo') &&<div onClick = {() =>redireccionar('/tiendas')}>Gestionar Tiendas</div>}
            {comprobarPuesto('Directivo') &&<div onClick = {() =>redireccionar('/productos')}>Gestionar Productos</div>}
        </div>

  )
}

export default NavBar