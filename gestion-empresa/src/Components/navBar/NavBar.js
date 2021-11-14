import React from 'react'
import 'firebase/auth';
import './navBar.scss';

function NavBar(props) {

  const user = props.user;

  console.log(props.user);
  return (
        <div className="container">
            <button>Boton 1</button>
            <button>Boton 2</button>
            <button>Boton 3</button>
            <button>Boton 4</button>
        </div>

  )
}

export default NavBar