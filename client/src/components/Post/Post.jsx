import * as React from "react";

import "./post.scss";

function Post() {
  return (
    <>
<button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">☔</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog bg-dark">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark fs-5" id="exampleModalLabel"> DEMANDE </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="action-name"  class="col-form-label text-dark">TAPEZ VOTRE DEMANDE :</label>
            <input type="text" class="form-control" id="action-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label text-dark">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer d-flex flex-row align-content-scretch justify-content-stretch flex-nowrap">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">fermer</button>
        <button type="button" class="btn btn-success">Que des gouttes de bohneur affluent sur toi ! </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
export default Post;
