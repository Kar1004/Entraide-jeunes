import React, { useState } from "react";
import axios from'axios'

function Connecter(props) {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const HandleLogin = (event) => {
    event.preventDefault();
    const emailError = document.querySelector(".email .error")
    const passwordError = document.querySelector(".password .error")
    axios({
        method:"post",
        url:`${process.env.REACT_APP_API_URL}login`,
        data:{
            email,
            password
        }
    }).then( (res)=>{
      console.log(res.data);
            if(res.data.error){
                emailError.innerHtml = res.data.error.email;
                passwordError.innerHtml = res.data.error.password;
            }else{
                window.location ='/'
                console.log(res);
            }
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <form action="" onSubmit={HandleLogin} id="Login-form">
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

      <input type="submit" value="heureux de te revoir" />
    </form>
  );
}

export default Connecter;
