import React from 'react'
import 'firebase/auth';
import './cabecera.scss';
import { auth } from '../../Services/firebase'
import BotonMenu from '../botonMenu/BotonMenu';
import { useNavigate } from 'react-router';

function Header({signOut, user, toggleMenu}) {

  const navigate = useNavigate(null);

  function logOut(){
    auth.signOut();
    signOut(null);
    navigate('/login',{replace: true});
  }

  console.log(user); 
  return (
    <div className='cabecera'>
      <div className='cabecera_boton'>
        {user && <BotonMenu toggleMenu = {toggleMenu}/>}
      </div>
      <div className='cabecera_titulo'>Tienda Bicis</div>
      <div className='cabecera_logout'>
        {user && <span className='cabecera_logout_link'onClick={() =>logOut()}>Cerrar sesión</span>}
      </div>
    </div>
  )
}

export default Header