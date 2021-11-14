import { useState } from 'react';
import Header from './Components/header/Header';
import Login from './Modules/Login/Login';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from './Modules/Home/Home';
import { auth } from "./Services/firebase";

function App() {

  
  const [user,setUser] = useState(auth.currentUser);

  return (
    <div>
      <Header user= {user} signOut={setUser}/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login user={user} onSubmit={setUser}/>}/>
          <Route path="/" element={<Home user={user}/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
