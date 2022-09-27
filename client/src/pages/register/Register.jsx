import React from 'react';
import { useState } from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

function Register(props) {
    const[signup,setSignup]=useState(props.signup)
    const[login,setLogin]=useState(props.login)

    const handleModals = (e)=>{
        if (e.target.value === "inscription"){
            setSignup(true)
            setLogin(false)
        }else if (e.target.value === "connection") {
            setSignup(false)
            setLogin(true)
        }
    }
    return (
        <div>
            <ul>
                <li onClick={handleModals} id="inscription" className={signup ? "active-btn" :null}>S'inscrire</li>
                <li onClick={handleModals} id="connection"  className={login  ? "active-btn" :null}> Se connecter</li>
            </ul>
            {signup && <Signup />}
            {login && <Login />}
        </div>
      
    );
}

export default Register;