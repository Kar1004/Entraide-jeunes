import Post from "../../components/Post/Post.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";
import "./home.scss";
import Cookies from "universal-cookie";
import { useContext, useEffect } from "react";
import axios from "axios";
import { UidContext } from "../../components/AppContext/appContext.jsx";
import Register from "../register/Register.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Sidebar from "../../components/sideBar/sideBar.jsx";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

function Home() {
  const uid = useContext(UidContext);

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
          console.log(result.data.user.userEmail);
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, []);

  return (
    <div>
      {uid ? (
        <>
          <div className="topBar">
            <TopBar />
            <Post />
          </div>
          <div className="body-center">
            <div className=" m-0 d-flex justify-content-around">
              <section className="feed">
                <Feed />
              </section>
              <section className="SideBar">
                <Sidebar />
              </section>
            </div>
          </div>
        </>
      ) : (
        <>
          <Register />
        </>
      )}
    </div>
  );
}

export default Home;
