import './sidebar.scss'
import LiveHelpSharpIcon from '@mui/icons-material/LiveHelpSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Sidebar() {
  return (
    <>
    <div class="sidebar">
      <div className="ProfilofUser">

      </div>
      <div className="SideBarList">
          <ul  className="listofItems">
            <li class="Demander">
              <LiveHelpSharpIcon class="Icon" aria-label="Demande d'aide"/>
              <span>Demande d'aide</span>
            </li>
            <li class="Aider">
              <FavoriteIcon class="Icon" aria-label="Proposition d'aide"/>
              <span>Proposition d'aide</span>
            </li>
            <li class="Infos">
              <InfoSharpIcon  class="Icon" aria-label="info utile"/>
              <span>Info utille</span>
            </li>
          </ul>
      </div>
      <div className="logout">

      </div>

    </div>
    </>
  )
}

export default Sidebar