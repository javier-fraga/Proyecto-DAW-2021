import React, { useEffect, useRef } from 'react'
import 'firebase/auth';
import './navBar.scss';

function NavBar({ user, toggleMenu }) {

  const ref = useRef(null);

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

  const redireccionar = () => {
    toggleMenu();
  }


  return (
        <div className="container" ref = {ref} >
            <div onClick = {redireccionar}>Boton 1</div>
            <div onClick = {redireccionar}>Boton 2</div>
            <div onClick = {redireccionar}>Boton 3</div>
            <div onClick = {redireccionar}>Boton 4</div>
        </div>

  )
}

export default NavBar