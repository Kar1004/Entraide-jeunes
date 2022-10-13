import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UidContext } from "../../components/AppContext/appContext";
import TopBar from "../../components/TopBar/TopBar";
import "./profil.scss";

function ProfilUser() {
  const uid = useContext(UidContext);
  const [pseudo, setPseudo] = useState("");
  const [bio, setBio] = useState("");
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

  return (
    <div>
      <TopBar />
      <div className="profilUser">
        <p>Profil</p>
        <div class="card shadow p-3 mb-5 bg-body rounded">
          <div class="card-header">
            <p class="text-uppercase fw-bold text-center ">PEEK A BOO ,{pseudo}</p>
          </div>
          <div class="card-body">
            <p class="text-uppercase bioCss text-light">bio</p>
            <p class="text-center text-light">{bio}</p>
          </div>
        </div>
        <div>
        <Link to="/profilEdit" class="btn btn-success rounded-circle shadow-sm p-3 mb-5 bg-body rounded">
          {" "}
          ✏️
        </Link>
        </div>
        <div className="UserCreation">
          <div className="UserPost"></div>
          <div className="userBlog"></div>
          <div className="userContact"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilUser;
