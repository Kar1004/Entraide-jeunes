import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UidContext } from "../../components/AppContext/appContext.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";
import "./profil.scss";

function Profil() {
  const uid = useContext(UidContext);
  const [pseudo, setPseudo] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Fetch = (action) => {
      console.log(action);
      const configuration = {
        method: "patch",
        url: `http://localhost:1004/user/create/${uid.userId}`,
        data: {
          pseudo,
          bio,
        },
      };

        console.log("send");
        console.log(configuration);
        axios(configuration)
          .then((result) => {
            console.log("receive");
            console.log(result);
            window.location.href = "/profiluser";
          })
          .catch((error) => {
            error = new Error();
          });
    };
    Fetch()
  };

  useEffect(() => {

  }, [uid]);
  return (
    <div className="text-center">
      {uid ? (
        <div>
          <TopBar />
          <div className="title">   
          <h1 className="text-uppercase ">Profil</h1>
          </div>
       
          <form onSubmit={handleSubmit} class="formulaire ">
            <div class="form-group">
              <label for="formGroupExampleInput">PSEUDO : </label>
              <input
                type="text"
                class="form-control"
                id="pseudo"
                placeholder="Colibri"
                aria-label="Tapez votre pseudo"
                onChange={(event) => setPseudo(event.target.value)}
                value={pseudo}
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">BIO :</label>
              <textarea
                class="form-control"
                id="bio"
                placeholder="Chaque mot est une porte vers toi pour pouvoir t'aider"
                aria-label="Tapez votre Bio"
                rows="3"
                onChange={(event) => setBio(event.target.value)}
                value={bio}
              ></textarea>
            </div>
            <button type="button" class="btn btn-success" onClick={(e) => handleSubmit(e)}>Ravie de mieux te connaitre!</button>
          </form>
        </div>
      ) : (
        <div>
          <TopBar />
          <p>deconnécté</p>
        </div>
      )}
    </div>
  );
}

export default Profil;
