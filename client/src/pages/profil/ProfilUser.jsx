import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UidContext } from "../../components/AppContext/appContext";
import CardEntraideUser from "../../components/share/CardEntraideUser";
import TopBar from "../../components/TopBar/TopBar";
import "./profil.scss";

function ProfilUser() {
  const uid = useContext(UidContext);
  const [pseudo, setPseudo] = useState("");
  const [bio, setBio] = useState("");
  const [posts, SetPost] = useState([]);
  // const [ostUser,setPostUser]=useState("");

  useEffect(() => {
    console.log(uid.userId);
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: `http://localhost:1004/${uid.userId}`,
      };
      axios(configuration)
        .then((result) => {
          console.log(" lol" + uid.userId);
          setBio(result.data.bio[0].bio);
          setPseudo(result.data.bio[0].pseudo);
          console.log(result);
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, [uid]);

  const Fetch = () => {
    const configuration = {
      method: "get",
      url: "http://localhost:1004/message/allmessage",
    };
    axios(configuration)
      .then((result) => {
        try {
          let results = [];
          let messages = result.data.users;
          messages.filter((message) => {
            if (message.users._id === uid.userId) {
              results.push(message);
            }
          });
          SetPost(results);
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => {
        error = new Error();
      });
  };
  Fetch();

  return (
    <div>
      <TopBar />

      <div className="profilUser">
        <p>Profil</p>
        <div class="card shadow p-3 mb-5 bg-body rounded">
          <div class="card-header">
            <p class="text-uppercase fw-bold text-center ">
              PEEK A BOO ,{pseudo}
            </p>
          </div>
          <div class="card-body">
            <p class="text-uppercase bioCss text-light">bio</p>
            <p class="text-center text-light">{bio}</p>
          </div>
        </div>
        <div>
          <Link
            to="/profilEdit"
            class="btn btn-success rounded-circle shadow-sm p-3 mb-5 bg-body rounded"
          >
            {" "}
            ✏️
          </Link>
        </div>
        <div className="UserCreation">
          <div className="UserPost">
            <div class="feedPost">
              {posts.map((post) => {
                return (
                  <CardEntraideUser message={post.message} type={post.type} />
                );
              })}
            </div>
          </div>
          <div className="userBlog"></div>
          <div className="userContact"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilUser;
