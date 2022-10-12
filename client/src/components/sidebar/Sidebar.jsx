import React from "react";
import "./SideBar.scss";
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BookIcon from '@mui/icons-material/Book';
import Cookies from "universal-cookie";
import HelpIcon from '@mui/icons-material/Help';
import Umbrella from "@mui/icons-material/Umbrella";
const cookies = new Cookies();


function Sidebar() {
  const logout = () => {
    cookies.remove("TOKEN");
    window.location.href = "/login";
    
}
  return (
    <div id="sidebar" className="NavBg">
      <header   className="text-center border-bottom  p-3 mb-5 bg-body">
        <a href="#" className="text-dark">Entraide</a>
      </header>
      <ul class="nav">
        <li>
       < AllInboxIcon/>
          <a href="#">
           Boite à demande
          </a>
        </li>
        <li>
          <BookIcon />
          <a href="#">
             Blog personnel
          </a>
        </li>
        <li>
          <HelpIcon />
          <a href="#">
            infos utiles
          </a>
        </li>
        {/* <li>
          <a href="#">
           Logement provisoire
          </a>
        </li> */}
        <li>
         <p class="text-uppercase text-dark">< UmbrellaIcon onClick={logout} className="logo"aria-label="se déconnecter" />deconecté</p> 
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
