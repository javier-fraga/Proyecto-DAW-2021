import { useEffect, useState } from 'react';
import Cabecera from './Components/cabecera/Cabecera';
import Login from './Modules/Login/Login';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import { Navigate } from "react-router";
import { auth } from "./Services/firebase";
import NavBar from './Components/navBar/NavBar';
import { getEmpleado } from './Services/httpCalls';
import GestionEmpleados from './Modules/GestionEmpleados/GestionEmpleados';
import PrivateRoute from './Components/privateRoute/PrivateRoute';
import Solicitudes from './Modules/Solicitudes/Solicitudes';
import GestionTiendas from './Modules/GestionTiendas/GestionTiendas';
import GestionProductos from './Modules/GestionProductos/GestionProductos';

function App() {

  const [abrir,setAbrir] = useState(false);
  const [user,setUser] = useState(auth.currentUser);
  const [userInfo,setUserInfo] = useState(null);

  useEffect(()=>{
    if(user){
      getEmpleado(user._delegate.email) 
      .then(response =>response.json())
      .catch(error => console.log(error))
      .then(data => setUserInfo(data));
    }
  },[user])

  const toggleMenu = () =>{
    setAbrir(!abrir);
  }

  console.log(userInfo);
  return (
    <div>
      <BrowserRouter>
        <Cabecera user = {user} signOut = {setUserInfo} toggleMenu = {toggleMenu}/>
        <div className = "homeContainer">
          {abrir && <NavBar abrir = {abrir} toggleMenu = {toggleMenu}/>}
          <Routes>
            <Route path="/login" element={<Login user={userInfo} onSubmit={setUser}/>}/>
            <Route path="/" element={<PrivateRoute><Navigate to="/solicitudes" /></PrivateRoute>}/>
            <Route path="/solicitudes" element={<PrivateRoute><Solicitudes user={userInfo}/></PrivateRoute>}/>
            <Route path="/empleados" element={<PrivateRoute><GestionEmpleados user={userInfo}/></PrivateRoute>}/>
            <Route path="/tiendas" element={<PrivateRoute><GestionTiendas user={userInfo}/></PrivateRoute>}/>
            <Route path="/productos" element={<PrivateRoute><GestionProductos user={userInfo}/></PrivateRoute>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
