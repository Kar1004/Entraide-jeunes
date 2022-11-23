import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./styles/login.scss";
import Cookies from "universal-cookie";
import LoginForm from "./img/girlswithaumbrella.png";
import { Link, useNavigate } from "react-router-dom";
import UmbrellaTwoToneIcon from "@mui/icons-material/UmbrellaTwoTone";
import Footer from "../../components/Footer/footer";
const cookies = new Cookies();
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
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
        return navigate("/profil");
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <div>
        <h1 className="text-center m-3 text-uppercase">Connexion :</h1>
        <div className="loginForm">
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
            <button
              type="button"
              class="btn btn-success"
              onClick={(e) => handleSubmit(e)}
            >
              Heureux de te revoir !
            </button>
          </form>
          <div className="SecondPart bg-dark rounded-circle d-flex flex-column align-items-center">
            <div className="ImageLogin">
              <img src={LoginForm} alt="girl with a umbralla" class="ImgLog" />
            </div>
            <div className="messageSign">
              <div class="ribbon">
                <div class="ribbon-stitches-top"></div>
                <div class="ribbon-content messageSign">
                  <p className="Btext">
                    On ne se connait pas encore , allez-viens nous rejoindre{" "}
                    <Link to="/signup" class="fs-5">
                      <UmbrellaTwoToneIcon aria-label="inscription" />
                    </Link>
                  </p>
                </div>
                <div class="ribbon-stitches-bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )} */}
    </>
  );
}
export default Login;
