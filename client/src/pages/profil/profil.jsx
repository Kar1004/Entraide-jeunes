import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { UidContext } from "../../components/AppContext/appContext.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";

function Profil() {
  const uid = useContext(UidContext);

  return (
    <div className="text-center">
      {uid ? (
        <div>
          <TopBar />
          <h1>Auth Component</h1>
          <h3 className="text-danger">hello</h3>
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
