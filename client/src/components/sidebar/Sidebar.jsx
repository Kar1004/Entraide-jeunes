import React from "react";
import "./SideBar.scss";

function Sidebar() {
  return (
    <div id="sidebar" className="bg-dark">
      <header  className="text-center border-bottom  p-3 mb-5 bg-body">
        <a href="#">Entraide</a>
      </header>
      <ul class="nav">
        <li>
          <a href="#">
           Boite à demande
          </a>
        </li>
        <li>
          <a href="#">
             Blog personnel
          </a>
        </li>
        <li>
          <a href="#">
            infos utiles
          </a>
        </li>
        <li>
          <a href="#">
           Logement provisoire
          </a>
        </li>
        <li>
          <a href="#">
              Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
