import { Route, Routes } from "react-router-dom";
import { UidContext } from "./components/AppContext/appContext";

import Home from "./pages/home/Home";
import Profil from "./pages/profil/profil";
import Login from "./pages/register/Login";
import Signup from "./pages/register/Signup";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfilUser from "./pages/profil/ProfilUser";
import ProfilEdit from "./pages/profil/profilEdit";
import Blog from "./pages/UserCreation/blog/blog";
import Contact from "./pages/UserCreation/contact/contact";
import Lost from "./pages/lost/Lost";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

function App() {
  const [uid, setUid] = useState(null);
  
  useEffect(() => {
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: "http://localhost:1004/user/refresh",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios(configuration)
        .then((result) => {
          console.log(result.data.user);
          const user = result.data.user;
          setUid(user);
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, []);

  return (
    <div>
      <UidContext.Provider value={uid}>
        <Routes>
          {uid ?(
          <>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/profiluser" element={<ProfilUser />} />
          <Route path="/profilEdit" element={<ProfilEdit />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/lost"  element={<Lost />} />
          </>
          ):(
            <>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </>
          )}
        </Routes>
      </UidContext.Provider>
    </div>
  );
}

export default App;
