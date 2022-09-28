
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './styles/login.scss'
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
const cookies = new Cookies();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const configuration = {
    method: "post",
    url: "http://localhost:1004/user/login",
    data: {
      email,
      password,
    },
  };
  axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
    

  

  return (
    <>
      <div className="LoginForm">
        <form className="Form" onSubmit={handleSubmit}>
          <div class="form-floating m-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              aria-label="tapez votre email"
              placeholder="name@example.com"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <label for="floatingInput">Email :</label>
          </div>
          <div class="form-floating m-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              aria-label="tapez votre password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button type="button" class="btn btn-outline-primary" onClick={(e) => handleSubmit(e)}>Heureux de te revoir !</button>
        </form>
        <div className="ImageSignup">
          <img
            src="../../../public/assets/register/login/PeopleBro.png"
            alt="Ami encourgeant son ami"
            class="ImgLog"
          />
        </div>
        <div className="messageSign"><p>On ne se connait pas encore , allez-viens nous rejoindre <Link  to="/signup">:)</Link></p></div>
      </div>
      {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
    </>
  );
}
export default Login