import React from 'react'
import 'firebase/auth';
import './header.scss';
import { auth } from '../../Services/firebase'

function Header(props) {

  function logOut(){
    auth.signOut();
    props.signOut(null);
  }

  const user = props.user;

  console.log(props.user);
  return (
    <div className="Title">
      <h1>Tienda Bicis</h1>
      {user && <a href="#" onClick={() =>logOut()}>Cerrar sesión</a>}
    </div>
  )
}

export default Header