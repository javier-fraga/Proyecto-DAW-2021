import { useEffect, useState } from 'react';
import Cabecera from './Components/cabecera/Cabecera';
import Login from './Modules/Login/Login';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import { Navigate } from "react-router";
import { auth } from "./Services/firebase";
import NavBar from './Components/navBar/NavBar';
import { getEmpleado, getTiendas } from './Services/httpCalls';
import GestionEmpleados from './Modules/GestionEmpleados/GestionEmpleados';
import PrivateRoute from './Components/privateRoute/PrivateRoute';
import Solicitudes from './Modules/Solicitudes/Solicitudes';
import GestionTiendas from './Modules/GestionTiendas/GestionTiendas';
import GestionProductos from './Modules/GestionProductos/GestionProductos';
import ModificarSolicitudes from './Modules/ModificarSolicitudes/ModificarSolicitudes';

function App() {

  const [abrir,setAbrir] = useState(false);
  const [user,setUser] = useState(auth.currentUser);
  const [userInfo,setUserInfo] = useState(null);
  const [tiendas,setTiendas] = useState([]);

  useEffect(()=>{
    if(user){
      getEmpleado(user._delegate.email) 
      .then(response =>response.json())
      .catch(error => console.log(error))
      .then(data => setUserInfo(data));
    }
  },[user])

  useEffect(()=>{
    let datosTemp = [];
    getTiendas()
    .then( data => data.json())
    .then( data => {data.forEach( tienda =>{
        datosTemp.push(
            {
                "id": tienda.id,
                "ciudad": tienda.ciudad,
                "direccion": tienda.direccion,
                "cp": tienda.cp,

            }
        )
        })
        setTiendas(datosTemp);
    });

  },[]);

  const toggleMenu = () =>{
    setAbrir(!abrir);
  }

  console.log(userInfo);
  return (
    <div>
      <BrowserRouter>
        <Cabecera user = {userInfo} signOut = {setUserInfo} toggleMenu = {toggleMenu} abrir = { abrir }/>
        <div className = "homeContainer">
          {abrir && <NavBar abrir = {abrir} toggleMenu = {toggleMenu}/>}
          <Routes>
            <Route path="/login" element={<Login user={userInfo} onSubmit={setUser}/>}/>
            <Route path="/" element={<PrivateRoute><Navigate to="/solicitudes" /></PrivateRoute>}/>
            <Route path="/solicitudes" element={<PrivateRoute><Solicitudes user={userInfo}/></PrivateRoute>}/>
            <Route path="/solicitudes/modificar" element={<PrivateRoute><ModificarSolicitudes user={userInfo}/></PrivateRoute>}/>
            <Route path="/empleados" element={<PrivateRoute><GestionEmpleados user={userInfo} tiendas = { tiendas }/></PrivateRoute>}/>
            <Route path="/tiendas" element={<PrivateRoute><GestionTiendas user={userInfo} tiendas = { tiendas }/></PrivateRoute>}/>
            <Route path="/productos" element={<PrivateRoute><GestionProductos user={userInfo} tiendas = { tiendas }/></PrivateRoute>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
