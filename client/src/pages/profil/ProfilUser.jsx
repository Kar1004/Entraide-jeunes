import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UidContext } from '../../components/AppContext/appContext';
import TopBar from '../../components/TopBar/TopBar';
import './profil.scss'

function ProfilUser() {
    const uid = useContext(UidContext);
    const [pseudo,setPseudo]=useState("")
    const [bio,setBio]=useState("")
    
      useEffect(() => {
        console.log(uid.userId);
        const Fetch = () => {
          const configuration = {
            method: "get",
            url: `http://localhost:1004/${uid.userId}`,
          };
          axios(configuration)
            .then((result) => {
                 setBio(result.data.bio[0].bio)
                 setPseudo(result.data.bio[0].pseudo)
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
          <span class="text-uppercase fw-bold">PEEK A BOO ,{pseudo}</span>
          <span class="text-uppercase ">bio</span>
          <p class="text-justify">{bio}</p>
          </div>
    </div>
  )
}

export default ProfilUser