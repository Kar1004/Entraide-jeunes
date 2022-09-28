import React from 'react'
import './TopBar.scss'
import '../../styles/settings.scss'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import FaceIcon from '@mui/icons-material/Face';
import Profil from '../../pages/profil/profil';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function TopBar() {
 
 
    const logout = () => {
      cookies.remove("TOKEN", { path: "/" });
      window.location.href = "/login";
      
  }
  return (
    <>
    <div class="TopBar">
        <div className="">
            <span>ENTRA<UmbrellaIcon className='umbrella logo'  aria-label="Entraide"/>DE</span>
        </div>
        <div className="Connected">
          <div className="profil">
           <FaceIcon /><Link  to="/profil" ><p>Profil</p></Link>
          </div>
        <div className="logout">
              <MeetingRoomIcon onClick={logout} className="logo"aria-label="se déconnecter" />
        </div>
        </div>
    </div>
    </>  
  )
}

export default TopBar