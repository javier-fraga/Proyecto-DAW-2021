import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Home = (props)=>{

    const navigate = useNavigate();

    useEffect(()=>{
        if(!props.user)
        return navigate("/login");
    },[props.user]) 
      
    console.log(props.user);
    return(
          <div>
              {props.user && props.user._delegate.email}
          </div>
      )
}

export default Home;