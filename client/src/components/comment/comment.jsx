import React from 'react'

function comment() {
  return (
    <>
    <button
      type="button"
      class="btn btn-light umbrella rounded-pill"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@fat"
    >
      <i class="bi bi-file-plus"></i>
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
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
              
                <label for="message-text" class="col-form-label text-dark">
                  commentaire:
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
              merci pour ta précieuse aide !{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default comment