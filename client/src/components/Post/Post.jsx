import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../../components/AppContext/appContext.jsx";
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import "./post.scss";

function Post() {
  const uid = useContext(UidContext);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [idMsg,setIdMsg]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

      const configuration = {
        method: "post",
        url: `http://localhost:1004/message/createMessage/${uid.userId}`,
        data: {
          type,
          message
        },
      };
      axios(configuration)
        .then((result) => {
           setIdMsg(result.data._id)
    });
  }
  useEffect(() => {
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: `http://localhost:1004/message/userInformation`,
      };
      axios(configuration)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, []);


  return (
    <>
      <button
        type="button"
        class="btn btn-light umbrella rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
        className="postMessage"
      >
        <MailOutlineTwoToneIcon  arial-label="envoyer un message" />
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog bg-dark">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title text-dark fs-5" id="exampleModalLabel">
                {" "}
                DEMANDE{" "}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="action-name" class="col-form-label text-dark">
                    TAPEZ VOTRE DEMANDE :
                  </label>
                  <input type="text" class="form-control" id="action-name" value={type} onChange={(event)=>setType(event.target.value)}/>
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label text-dark">
                    Message:
                  </label>
                  <textarea class="form-control" id="message-text" value={message} onChange={(event)=>setMessage(event.target.value)}></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer d-flex flex-row align-content-scretch justify-content-stretch flex-nowrap">
              <button
                type="button"
                class="btn btn-dark"
                data-bs-dismiss="modal"
              >
                fermer
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={(e) => handleSubmit(e)}
              >
                Que des gouttes de bonheur affluent sur toi !{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
