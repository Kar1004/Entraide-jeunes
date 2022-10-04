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
        .then((result) => {console.log(result);
          window.location.href = "/login"; })
        .catch((error) => {console.log(error);})
  }

  
  return (
    <div className="signupForm">
      <form onSubmit={handleSubmit} className="Form">
        <div class="form-floating m-3">
          <input
            type="text"
            class="form-control"
            id ='pseudo'
            onChange={(event) => setPseudo(event.target.value)}
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
            onChange={(event) => setEmail(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
            value = {password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="SignupForm d-flex flex-row m-3">
        <button class="btn btn-dark " onClick={()=>setShowPass(!showPass)}>{showPass ? "cacher" : "montrer"}</button>
        <button
          class="btn btn-dark"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >Rejoins-nous!</button>
        </div>
      </form>
      <div className="ImageSignup bg-white rounded-pill ">
        <img
          src="./img/PeopleBro.png"
          alt="Ami encourgeant son ami"
          class="ImgSign"
        />
           <div class="messageSign text-dark"><p>Ah ,tu es déjà des notre ! <Link to="/login" class="fs-5">☂️</Link></p></div>
      </div>
    </div>
  );
}

export default Signup
