import React from 'react'
import './TopBar.scss'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

function TopBar() {
  return (
    <>
    <div class="TopBar">
        <div className="Logo">
            <span>ENTRA<UmbrellaIcon className='umbrella'  aria-label="Entraide"/>DE</span>
        </div>
        <div className="logout">
              <MeetingRoomIcon  aria-label="se déconnecter"/>
        </div>
    </div>
    </>  
  )
}

export default TopBar