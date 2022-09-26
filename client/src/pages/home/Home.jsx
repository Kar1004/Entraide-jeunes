import Feed from '../../components/feed/Feed.jsx'
import Post from '../../components/Post/Post.jsx'
import Sidebar from '../../components/sidebar/Sidebar'
import TopBar from '../../components/TopBar/TopBar.jsx'
import './home.scss'


function Home () {
  return (
    <div>
       <div className="topBar">
           <TopBar/>
        </div>
      <div className='container'>
        <Feed />
        <Sidebar />
      </div>
      <div className="footer">
        <Post />
      </div>
    </div>
  )
}

export default Home
