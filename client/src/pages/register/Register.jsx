import axios from "axios";
import React from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:1004/user/signup",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        console.log(result);
        window.location.href = "/register";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
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
        window.location.href = "/profil";
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <div className="formulaire d-flex ">
      <div id="inscription" className="inscrire">
        <form onSubmit={handleSubmit} className="Form">
          <div class="form-floating m-3">
            <input
              type="email"
              class="form-control"
              aria-label="tapez votre email"
              placeholder="name@example.com"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <label htmlFor="Email">Email :</label>
          </div>
          <div class="form-floating m-3">
            <input
              type={showPass ? "type" : "password"}
              className="form-control"
              id="floatingPassword"
              aria-label="tapez votre password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="SignupForm d-flex flex-row m-3">
            <button
              class="btn btn-dark button-r "
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "Cacher" : "Montrer"}
            </button>
            <button
              class="btn btn-dark"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Rejoins-nous!
            </button>
          </div>
        </form>
      </div>
      <div id="connection" className="connecter">
        <form className="Form" onSubmit={handleSubmitLogin}>
          <div class="form-floating m-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              aria-label="tapez votre email"
              placeholder="name@example.com"
              onChange={(event) => setEmail(event.target.value)}
              value={emailLog}
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
              value={passwordLog}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            type="button"
            class="btn btn-success"
            onClick={(e) => handleSubmit(e)}
          >
            Heureux de te revoir !
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
