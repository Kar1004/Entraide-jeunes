import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UidContext } from "../AppContext/appContext";
import "./footer.scss";
function Footer() {
  const uid = useContext(UidContext);
  return (
    <div>
      {uid ? (
        <footer class="footer">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12 text-center">
                <h2 class="footer-heading">
                  <Link to="/home" className="color">
                    Entraide
                  </Link>
                </h2>
                {/* <p class="menu">
                <Link  to="/home">la page présentation</Link>
              </p> */}
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-12 text-center">
                <p class="copyright">
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2022
                  Ce site est fait avec amour et attention Entraide
                </p>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer class="footer">
          <div class="container">
            <div class="row mt-5">
              <div class="col-md-12 text-center">
                <p class="copyright">
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2022
                  Ce site est fait avec amour et attention Entraide
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default Footer;
