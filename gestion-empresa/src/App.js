import { useState } from 'react';
import Cabecera from './Components/cabecera/Cabecera';
import Login from './Modules/Login/Login';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import { auth } from "./Services/firebase";
import NavBar from './Components/navBar/NavBar';
import Home from './Modules/Home/Home';

function App() {

  const [abrir,setAbrir] = useState(false);
  const [user,setUser] = useState(auth.currentUser);

  const toggleMenu = () =>{
    setAbrir(!abrir);
  }

  return (
    <div>
      <Cabecera user = {user} signOut = {setUser} toggleMenu = {toggleMenu}/>
      <div className = "homeContainer">
      {abrir &&<NavBar abrir = {abrir} toggleMenu = {toggleMenu}/>}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login user={user} onSubmit={setUser}/>}/>
          <Route path="/" element={<Home user={user}/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
