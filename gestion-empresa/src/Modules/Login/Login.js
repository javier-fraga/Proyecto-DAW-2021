import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import './login.scss'
import { signInWithEmailAndPassword , setPersistenceLocal} from '../../Services/firebase.js';
import { useNavigate } from "react-router-dom";


const Login = (props)=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState();
    const navigate = useNavigate(null);

    const submit = () => {
      setPersistenceLocal();
      signInWithEmailAndPassword(email,password).then(
          response => {
              props.onSubmit(response.user);
              console.log(response.user);
              navigate('/solicitudes',{replace: true})
          },
          error =>{
            setError(error.message);
          }

      );
    }

    console.log(props.user);
    if(!props.user)
      return(
        <div>
      {!props.user && <div className='login'>
          <form
            className='login__form'
            onSubmit={e => {e.preventDefault();
              submit();}}
          >
            <input
              type='text'
              className='login__form__input'
              placeholder='Email'
              value={email}
              onChange={e =>
                setEmail(e.target.value)
              }
            />
            <input
              type='password'
              className='login__form__input'
              placeholder='Contraseña'
              value={password}
              onChange={e =>
                setPassword(e.target.value)
              }
            />
            <button className='login__form__button'>Entrar</button>
            <div
              className='login__form__error'
              style={{
                opacity: error != null ? 1 : 0,
                height: error != null ? 'auto' : 0
              }}
            >
              <span className='message'>Error al iniciar sesión</span>
            </div>
          </form>
      </div>}
    </div>
      )
    else
      return null;

}

export default Login;