import './cardUser.scss'
import axios from "axios";
import React, { useContext, useEffect } from "react";
import PostModify from '../Post/PostUserModif';
import { UidContext } from "../../components/AppContext/appContext.jsx";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

 function CardEntraideUser(props) {
  const uid = useContext(UidContext);
  const [users,setUsersId]=['']
  useEffect(() => {
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: `http://localhost:1004/message/nopopulate`,
      };
      axios(configuration)
        .then((result) => {
       let UserId= result.data.users;
       let user = UserId.map((Uid)=>{ return Uid.users});
      console.log(user);
      setUsersId(user)

        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, []);

  const FetchDelete = () => {
    const deleteMessage = {
      method: "delete",
      url: `http://localhost:1004/message/deleteMessage/${uid.userId}`,
    };
    axios(deleteMessage)
      .then((result) => {
      if(users == uid.userId){
             console.log('true');
      }else{
        console.log('false');
      }
    }
    )
    }

  return (
  
    <div class="card text-center">
  <div class="card-header">
   <p class="text-title"> {props.type }</p>
  </div>
  <div class="card-body">
    <p class="card-title text-light ">{props.message}</p>
    <p class="card-text text-justify"></p>
  </div>
  <div class="card-footer text-muted ">
    <div className="ModifierCard"><PostModify /></div>
    <div className="DeleteMessage" onClick={FetchDelete}><CancelPresentationIcon />  </div>

  </div>
</div>

  );
}
export default CardEntraideUser