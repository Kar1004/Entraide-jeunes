import React, { useState } from "react";
import axios from "axios";
import './styles/signup.scss'
import SignImg from './img/PeopleBro.png'
import { Link } from "react-router-dom";
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
function Signup(props) {
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
        email,
        password
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
        <button class="btn btn-dark button-r " onClick={()=>setShowPass(!showPass)}>{showPass ? "Cacher" : "Montrer"}</button>
        <button
          class="btn btn-dark"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >Rejoins-nous!</button>
        </div>
      </form>
      <div className="ImageSignup bg-dark rounded-pill d-flex flex-column align-items-center">
        <img
          src={SignImg}
          alt="Ami encourgeant son ami"
          class="ImgSign"
        />
           <div class="messageSign text-white"><p>Ah ,tu es déjà des notre ! <Link to="/login" class="fs-5"><BeachAccessTwoToneIcon aria-label="connection"/></Link></p></div>
      </div>
    </div>
  );
}

export default Signup
