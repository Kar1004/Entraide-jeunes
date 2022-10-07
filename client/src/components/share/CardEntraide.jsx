import * as React from 'react';
import './CardEntraide.scss'
import { UidContext } from '../AppContext/appContext';
import axios from 'axios';
import { useState } from 'react';
import './CardEntraide.scss'
import e from 'express';


 function CardEntraide(props) {
  const uid = React.useContext(UidContext)
  const [pseudo,setPseudo]=useState("")
  const [bio,setBio]=useState("")
 
  React.useEffect(() => {
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
  
    <div class="card text-center">
  <div class="card-header">
    {props.type }
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.message}</h5>
    <p class="card-text text-justify"></p>
    <a href="#" class="btn btn-outline-red ">💓</a>
  </div>
  <div class="card-footer text-muted">
    <div className="creator">{pseudo}</div>
    <div className="date"></div>
  </div>
</div>

  );
}
export default CardEntraide