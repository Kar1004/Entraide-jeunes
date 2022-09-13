import React, { useState } from 'react';
import axios from 'axios';
import Connecter from './Connecter';
function Inscription(props) {
    const [formsSubmit,SetFormsSubmit] = useState(false)
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [spedo, SetSpedo] = useState("");
    const HandleSignup= (event) => {
        event.preventDefault();
        const emailError = document.querySelector(".email .error")
        const passwordError = document.querySelector(".password .error")
        axios({
            method:"post",
            url:`${process.env.REACT_APP_API_URL}signup`,
            data:{
                email,
                password,
                spedo,
                
            }
        }).then( (res)=>{
          console.log(res.data);
                if(res.data.error){
                    emailError.innerHtml = res.data.error.email;
                    passwordError.innerHtml = res.data.error.password;
                }else{
                    SetFormsSubmit(true)
                }
        }).catch((err)=>{
          console.log(err);
        })
      };
    return (
        <div>
            {formsSubmit? 
            (<><Connecter /><span>Vous étes bien connecter</span></>):(
            <form action="" onSubmit={HandleSignup} id="Signup-form">
             <label htmlFor="spedo">spedo</label>
      <input
        id="spedo"
        type="text"
        name="spedo"
        placeholder="Colibri"
        aria-label="tapez votre spedo"
        onChange={(event) => SetSpedo(event.target.value)}
        value={spedo}
      />
       {/* <label htmlFor="age">age</label> */}
      {/* <input
        id="age"
        type="number"
        name="age"
        placeholder="21"
        aria-label="tapez votre age"
        onChange={(event) => Set(event.target.value)}
        value={age}
      /> */}
                
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="@"
        aria-label="tapez votre email"
        onChange={(event) => SetEmail(event.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        name="password"
        aria-label="tapez votre mot de passe"
        onChange={(event) => SetPassword(event.target.value)}
        value={password}
      />
       <div className="password error"></div>

      <input type="submit" value="rejoins nous" />
    </form>
            )}
        </div>
    );
}

export default Inscription;