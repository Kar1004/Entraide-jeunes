import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { UidContext } from "../../../components/AppContext/appContext";
import TopBar from "../../../components/TopBar/TopBar";

function Contact() {
  const uid = useContext(UidContext);
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const configuration = {
      method: "patch",
      url: `http://localhost:1004/user/editContact/${uid.userId}`,
      data: {
        age,
        city
      },
    };

    axios(configuration).then((result) => {
      console.log(result);
      return navigate("/profiluser");
    });
  };
  return (
    <div>
      <div className="text-center">
        {uid ? (
          <div>
            <TopBar />
            <div className="title">
              <h1 className="text-uppercase ">Contact</h1>
            </div>
            <form class="formulaire ">
              <div class="form-group">
                <label for="formGroupExampleInput">age : </label>
                <input
                  type="text"
                  class="form-control"
                  id="age"
                  placeholder="18"
                  aria-label="Tapez votre age"
                  onChange={(event) => setAge(event.target.value)}
                  value={age}
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">ville :</label>
                <input
                  class="form-control"
                  id="ville"
                  placeholder="Chaque mot est une porte vers toi pour pouvoir t'aider"
                  aria-label="Tapez votre ville"
                  rows="3"
                  onChange={(event) => setCity(event.target.value)}
                  value={city}
                ></input>
              </div>
              <button
                type="button"
                class="btn btn-success"
                onClick={(e) => handleSubmit(e)}
              >
                Ravie de mieux te connaitre!
              </button>
            </form>
          </div>
        ) : (
          <div>
            vous étes déconnecté
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
