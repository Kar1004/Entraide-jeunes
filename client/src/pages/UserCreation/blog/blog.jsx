import React from "react";

function Blog(props) {
  const uid = useContext(UidContext);
  const [blog, setBlog] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Fetch = (action) => {
      console.log(action);
      const configuration = {
        method: "get",
        url: `http://localhost:1004/user/create/${uid.userId}`,
        data: {
          title,
          blog
        },
      };
      console.log(configuration);
      axios(configuration)
        .then((result) => {
          console.log(result);
          window.location.href = "/user/bio";
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  };

  useEffect(() => {}, [uid]);
  return (
    <div className="text-center">
      <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Blog de {{userId}} : </div>
        <div class="card-body text-success">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">
           {{blog}}
          </p>
        </div>
        <div class="card-footer bg-transparent border-success">{{date}}</div>
      </div>
      <button onClick={(e)=>handleSubmit(e)}>envoyé</button>
    </div>
  );
}

export default Blog;
