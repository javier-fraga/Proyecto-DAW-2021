import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import './login.scss'
import { signInWithEmailAndPassword } from '../../Services/firebase.js';
import { useNavigate } from "react-router-dom";

const Login = (props)=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const submit = () => {
        signInWithEmailAndPassword(email,password).then(
            response => {
                props.onSubmit(response.user);
                console.log(response.user);
            },
            error =>{
                console.log(error);
            }

        );
    }

    useEffect(()=>{
        if(props.user)
          navigate("/",{replace: true});
    },[props.user])

    console.log(props.user);

    if(!props.user)
      return(
        <div className="wrapper">
          <form className="login" onSubmit={e=> {e.preventDefault(); submit();}}>
              <p className="title">Iniciar sesión</p>
              <input type="email" placeholder="Correo electronico" autofocus
              onChange={ e => setEmail(e.target.value)}/>
              <input type="password" placeholder="Contraseña" 
              onChange={ e => setPassword(e.target.value)}/>
              <a href="#">Forgot your password?</a>
              <button>
              <i className="spinner"></i>
              <span className="state">Log in</span>
              </button>
          </form>
        </div>
      )
    else
      return null;

}

export default Login;