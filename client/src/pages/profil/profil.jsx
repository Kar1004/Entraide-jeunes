import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UidContext } from "../../components/AppContext/appContext.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";

function Profil() {
  const uid = useContext(UidContext);
  const [pseudo,setPseudo]=useState("")
  const [bio,setBio]=useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(uid.userId);
    const Fetch = () => {
      const configuration = {
        method: "patch",
        url: `http://localhost:1004/user/create/${uid.userId}`,
      };
      axios(configuration)
        .then((result) => {
          console.log(result);
          window.location.href = "/profiluser";
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, [uid]);
  return (
    <div className="text-center">
      {uid ? (
        <div>
          <TopBar />
          <h1>Auth Component</h1>
          <h3 className="text-danger">hello</h3>
          <form onSubmit={handleSubmit}>
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
            <button type="button" class="btn btn-outline-primary" onClick={(e) =>handleSubmit(e)}>Heureux de te revoir !</button>
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
