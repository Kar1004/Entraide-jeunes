import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext/appContext.jsx";
import UpdateIcon from '@mui/icons-material/Update';
import "./post.scss";

function PostModify() {
  const uid = useContext(UidContext);
  const [message, setMessage] = useState("");
  const [idMsg, setIdMsg] = useState("");

  useEffect(() => {
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: `http://localhost:1004/message/allMessage`,
      };
      axios(configuration)
        .then((result) => {
        
  
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

      const configuration = {
        method: "put",
        url: `http://localhost:1004/message/updateMessage/${uid.userId}`,
        data: {
          message
        },
      };
      axios(configuration)
        .then((result) => {
          console.log(result);
          window.location.href = "/profiluser";
    });
  }



  return (
    <>
      <button
        type="button"
        class="btn btn-light umbrella rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
        p-0
      >
     <UpdateIcon aria-label="mise-jour des messages" />
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
                MODIFIER LA DEMANDE{" "}
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
                  <label for="message-text" class="col-form-label text-dark">
                   TAPEZ VOTRE MESSAGE:
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
              On espéres que ta demande atteindra le coeur des gens  !{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostModify;
