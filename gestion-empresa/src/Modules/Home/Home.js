import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import { useNavigate } from "react-router-dom";
import Solicitudes from '../Solicitudes/Solicitudes';


const Home = (props)=>{

    const navigate = useNavigate();

    useEffect(()=>{
        if(!props.user)
        return navigate("/login");
    },[props.user]) 
      
    console.log(props.user);
    return(
          <div>
              <Solicitudes/>
          </div>
      )
}

export default Home;