import React, { useState } from "react";
import axios from "axios";
import './styles/signup.scss'
import { Link } from "react-router-dom";
function Signup() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass ,setShowPass] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const configuration = {
    method: "post",
    url: "http://localhost:1004/user/signup",
    data: {
      pseudo,
      email,
      password,
    },
  };
      axios(configuration)
      .then((result) => {console.log(result);})
      .catch((error) => {console.log(error);})
  
  return (
    <div className="signupForm">
      <form onSubmit={(e)=>handleSubmit(e)} className="Form">
        <div class="form-floating m-3">
          <input
            type="text"
            class="form-control"
            id ='pseudo'
            onChange={(e) => setPseudo(e.target.value)}
            value = {pseudo}
            aria-label="tapez votre pseudo"
            placeholder="Colibri"
          />
          <label htlmFor="pseudo">Pseudo : </label>
        </div>
        <div class="form-floating m-3">
          <input
            type="email"
            class="form-control"
            aria-label="tapez votre email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value = {email}
          />
          <label htmlFor="Email">Email :</label>
        </div>
        <div class="form-floating m-3">
          <input
            type={ showPass ? "type" : "password" }
            className="form-control"
            id="floatingPassword"
            aria-label="tapez votre password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button class="btn btn-outline-success" onClick={()=>setShowPass(!showPass)}>{showPass ? "cacher" : "montrer"}</button>
        <button
          class="btn btn-outline-primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >Rejoins-nous!</button>
      </form>
      <div className="ImageSignup">
        <img
          src="../../../public/assets/register/signup/Cheer up-bro.svg"
          alt="Ami encourgeant son ami"
          class="ImgSign"
        />
           <div className="messageSign"><p>Ah ,tu es déjà des notre ! <Link to="/login">:)</Link></p></div>
      </div>
    </div>
  );
}

export default Signup
