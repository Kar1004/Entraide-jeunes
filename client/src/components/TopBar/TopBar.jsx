import React from "react";
import "./TopBar.scss";
import "../../styles/settings.scss";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import FaceIcon from "@mui/icons-material/Face";
import { Link } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function TopBar() {
  const logout = () => {
    cookies.remove("TOKEN");
    window.location.href = "/login";
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg headerNav " id="headerNav">
        <div class="container">
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class=" collapse navbar-collapse  " id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto ">
              <li class="nav-item">
                <Link to="/home" class="nav-link mx-2 text-light">
                  Home
                </Link>
              </li>
              <li class="nav-item d-none d-lg-block">
                <span class="nav-link mx-2  text-light">
                  ENTRA{" "}
                  <Link to="/home">
                    <UmbrellaIcon
                      className="umbrella logo"
                      aria-label="Entraide"
                    />
                  </Link>
                  DE
                </span>
              </li>
              <li class="nav-item ">
                <Link class="nav-link mx-2 text-light" to="/profiluser">
                  <p>Profil</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopBar;
