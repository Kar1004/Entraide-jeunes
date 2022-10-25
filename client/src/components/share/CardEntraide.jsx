
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
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: `http://localhost:1004/message/allMessage`,
      };
      axios(configuration)
        .then((result) => {
          console.log(result.data.users.users && result.data.users.users);
   
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, []);


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
    <div className="creator">{props.pseudo}</div>
    <div className="date"></div>
  </div>
</div>

  );
}
export default CardEntraide