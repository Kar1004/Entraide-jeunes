import {Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profil from "./pages/profil/profil";
import Login from "./pages/register/Login";
import Signup from "./pages/register/Signup";



function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route  path="/Login"  element={<Login />}/>
        <Route  path="/signup"  element={<Signup  />}/>
        <Route path='/profil'  element={<Profil />}/>
      </Routes>
    </div>
  );
}

export default App;
