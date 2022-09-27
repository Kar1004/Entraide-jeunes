import './sidebar.scss'
import InboxIcon from '@mui/icons-material/Inbox';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
function Sidebar() {
  return (
    <>
    <div class="sidebar">
      <div className="ProfilofUser">

      </div>
      <div className="SideBarList">
          <ul  className="listofItems">
            <li class="Demander">
              <InboxIcon class="Icon" aria-label="Demande d'aide"/>
              <span>Boite à demande</span>
            </li>
            <li class="Infos">
              <ContactSupportIcon  class="Icon" aria-label="info utile"/>
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