import React from 'react'
import 'firebase/auth';
import './cabecera.scss';
import { auth } from '../../Services/firebase'
import BotonMenu from '../botonMenu/BotonMenu';
import { useNavigate } from 'react-router';

function Header({signOut, user, toggleMenu, abrir}) {

  const navigate = useNavigate(null);

  function logOut(){
    auth.signOut();
    signOut(null);
    navigate('/login',{replace: true});
  }

  return (
    <div className='cabecera'>
      <div className='cabecera_boton'>
        {user && <BotonMenu toggleMenu = {toggleMenu} abrir = { abrir }/>}
      </div>
      <div className='cabecera_titulo'>TodoCiclos</div>
      <div className='cabecera_logout'>
        {user && <span className='cabecera_logout_link'onClick={() =>logOut()}>Cerrar sesión</span>}
      </div>
    </div>
  )
}

export default Header