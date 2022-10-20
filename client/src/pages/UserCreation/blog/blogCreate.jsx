import React, {  useState } from "react";
import axios from "axios";

function blogCreate() {
  const [blog, setBlog] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Fetch = (action) => {
      console.log(action);
      const configuration = {
        method: "patch",
        url: `http://localhost:1004/user/create/${uid.userId}`,
        data: {
          title,
          blog,
        },
      };
      console.log(configuration);
      axios(configuration)
        .then((result) => {
          setBlog(blog);
          setTitle(title);
          window.location.href = "/user/bio";
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
      >
        Blog :{" "}
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {" "}
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
                  <label for="recipient-name" class="col-form-label">
                    titre du blog :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => setTitle(e.target.value)}
                    name="titre"
                    value={{ title }}
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    blog:
                  </label>
                  <textarea
                    class="form-control"
                    id="message-text"
                    onChange={(e) => setBlog(e.target.value)}
                    name="blog"
                    value={{ blog }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default blogCreate;
