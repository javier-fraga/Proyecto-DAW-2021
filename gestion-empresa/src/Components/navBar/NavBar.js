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


  return (
        <div className="container" ref = {ref} >
            <div onClick = {() =>redireccionar('/solicitudes')}>Solicitudes</div>
            <div onClick = {() =>redireccionar('/solicitudes/modificar')}>Modificar solicitudes</div>
            <div onClick = {() =>redireccionar('/empleados')}>Gestionar Empleados</div>
            <div onClick = {() =>redireccionar('/tiendas')}>Gestionar Tiendas</div>
            <div onClick = {() =>redireccionar('/productos')}>Gestionar Productos</div>
        </div>

  )
}

export default NavBar