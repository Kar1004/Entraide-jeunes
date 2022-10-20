
import './CardEntraide.scss'
import './CardEntraide.scss'
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UidContext } from "../../components/AppContext/appContext.jsx";


 function CardEntraide(props) {
  const uid = useContext(UidContext);
  const [pseudo, setPseudo] = useState("");



  useEffect(() => {
    console.log(uid.userId);
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: `http://localhost:1004/${uid.userId}`,
      };
      axios(configuration)
        .then((result) => {
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
  
    <div class="card text-center">
  <div class="card-header">
   <p class="text-title"> {props.type }</p>
  </div>
  <div class="card-body">
    <p class="card-title text-light ">{props.message}</p>
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