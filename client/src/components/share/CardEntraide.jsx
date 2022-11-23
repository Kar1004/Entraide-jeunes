import './CardEntraide.scss'
import axios from "axios";
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import React, { useEffect } from "react";


 function CardEntraide(props) {
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

const ProfilUser = ()=>{
  window.location.href = "/profiluser";
}

  return (
  
    <div class="card text-center">
  <div class="card-header">
   <p class="text-title"> {props.type }</p>
  </div>
  <div class="card-body">
    <p class="card-title text-light ">{props.message}</p>
    <p class="card-text text-justify"></p>
    <a href="#" class="btn btn-outline-red LikeIcon"><VolunteerActivismOutlinedIcon aria-label="donnez-un coeur" /></a>
  </div>
  <div class="card-footer text-muted">
    <div className="creator"  onClick={ProfilUser}>{props.pseudo} </div>
    <div className="date"></div>
  </div>
</div>

  );
}
export default CardEntraide