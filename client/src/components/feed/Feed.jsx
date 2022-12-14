import React, { useEffect } from "react";
import CardEntraide from "../share/CardEntraide";
import { UidContext } from "../AppContext/appContext";
import "./feed.scss";
import axios from "axios";
import { useState } from "react";

function Feed() {
  // const [type, setType] = useState("");
  // const [message, setMessage] = useState("");
  // const uid = useContext(UidContext);
  const [posts, SetPost] = useState([]);



    const Fetch = () => {
      const configuration = {
        method: "get",
        url: "http://localhost:1004/message/allmessage",
        data: {
        },
      };
      axios(configuration)
        .then((result) => {
          try{
          SetPost(result.data.users)
          }catch(e){
            console.log(e);
          }
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();

    
  return (
    <div class="feedPost">

        {
          posts.map((post)=>{
            return <CardEntraide message={post.message} type={post.type} pseudo={post.users.bio[0].pseudo}/>
          })
          
        }
  
    </div>
  );
}

export default Feed;