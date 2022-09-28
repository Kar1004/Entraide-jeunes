import Feed from '../../components/feed/Feed.jsx'
import Post from '../../components/Post/Post.jsx'
import Sidebar from '../../components/sidebar/Sidebar'
import TopBar from '../../components/TopBar/TopBar.jsx'
import './home.scss'
import Cookies from "universal-cookie";
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UidContext } from '../../components/AppContext/appContext.jsx'
import Register from '../register/Register.jsx'
const cookies = new Cookies();

const token = cookies.get("TOKEN");

function Home () {
 const uid = useContext(UidContext)

  useEffect(() => {
    const Fetch = ()=>{
    const configuration = {
      method: "get",
      url: "http://localhost:1004/user/refresh",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(configuration)
      .then((result) => {
        console.log(result.data.user.userEmail);
      })
      .catch((error) => {
        error = new Error();
      });
    }
    Fetch()
  }, []);

   
   
  return (
    <div>
      {uid ? (
        <>
       <div className="topBar">
           <TopBar />
        </div>
      <div className='container'>
        <Feed />
        <Sidebar />
      </div>
      <div className="footer">
        <Post />
      </div>
      </>):(<>
      <Register />
      </>
      )}
    </div>
  )
}

export default Home
