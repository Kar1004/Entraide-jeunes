import React from "react";
import "./sidebar.scss";
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BookIcon from '@mui/icons-material/Book';
import Cookies from "universal-cookie";
import HelpIcon from '@mui/icons-material/Help';
import Umbrella from "@mui/icons-material/Umbrella";
import { useNavigate } from "react-router";
const cookies = new Cookies();


function sidebar() {
  const navigate = useNavigate()
  const logout = () => {
    cookies.remove("TOKEN");
   return navigate("/login");
    
}
  return (
    <div id="sidebar" className="NavBg">
      <header   className="text-center border-bottom  p-3 mb-5 bg-body hName" >
        <a href="#" className="text-dark ">Bienvenu</a>
      </header>
      <ul class="nav align-center">
        <li class="Dlink">
       < AllInboxIcon/>
          <a  href="#">
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
        <li className="Deconnect">
         <p className="text-uppercase text-dark Dnlink">< UmbrellaIcon onClick={logout} className="logo"aria-label="se déconnecter" />deconecté</p> 
        </li>
      </ul>
    </div>
  );
}

export default sidebar;
