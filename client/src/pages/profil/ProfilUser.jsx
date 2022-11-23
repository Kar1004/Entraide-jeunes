import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UidContext } from "../../components/AppContext/appContext";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import PermContactCalendarSharpIcon from "@mui/icons-material/PermContactCalendarSharp";
import PersonRemoveSharpIcon from "@mui/icons-material/PersonRemoveSharp";
import CardEntraideUser from "../../components/share/CardEntraideUser";
import TopBar from "../../components/TopBar/TopBar";
import "./profil.scss";
import Footer from "../../components/Footer/footer";

function ProfilUser() {
  const uid = useContext(UidContext);
  const [pseudo, setPseudo] = useState("");
  const [bio, setBio] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [posts, SetPost] = useState([]);
  const navigate = useNavigate();
  // const [ostUser,setPostUser]=useState("");

  //Pour éditer et avoir les donnés du profil
  useEffect(() => {
    console.log(uid.userId);
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: `http://localhost:1004/${uid.userId}`,
      };
      axios(configuration)
        .then((result) => {
          console.log(result);
          setPseudo(result.data.bio[0].pseudo);
          setBio(result.data.bio[0].bio);
          setMail(result.data.email);
          setAge(result.data.contact[0].age);
          setCity(result.data.contact[0].city);
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, [uid]);

  //pour avoir les messsages créer par l'utilisateur

  const Fetch = () => {
    const configuration = {
      method: "get",
      url: "http://localhost:1004/message/allmessage",
    };
    axios(configuration)
      .then((result) => {
        try {
          let results = [];
          let messages = result.data.users;
          messages.filter((message) => {
            if (message.users._id === uid.userId) {
              results.push(message);
            }
          });
          SetPost(results);
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => {
        error = new Error();
      });
  };
  Fetch();

  // pour supprimer l'utilisateur
  // const deleteUser=()=>{
  //   const configuration = {
  //     method:"delete",
  //     url:`http://localhost:1004/deleteUser/${uid.userId}`
  //   }
  //   axios(configuration)
  //   .then((result) => {
  //     console.log("supprimé");
  //     window.location.href = "/signup";
  //   })
  // }

  //pour les contact
  const ContactPage = () => {
    return navigate("/contact");
  };

  // pour supprimer l'utilisateur
  const deleteUser = () => {
    const configuration = {
      method: "delete",
      url: `http://localhost:1004/deleteUser/${uid.userId}`,
    };
    axios(configuration).then((result) => {
      console.log("supprimé");
      window.location.href = "/signup";
    });
  };

  return (
    <div className="BodyColor">
      <TopBar />

      <div className="profilUser">
        <p className="Pedit">Profil</p>
        <div class="card shadow p-3 mb-5 bg-body rounded">
          <div class="card-header">
            <p class="text-uppercase fw-bold text-center ">
              PEEK A BOO ,{pseudo}
            </p>
          </div>
          <div class="card-body">
            <p class="text-uppercase bioCss text-light">bio</p>
            <p class="text-center text-light">{bio}</p>
          </div>
        </div>
        <div className="buttonEdt ">
          <Link
            to="/profilEdit"
            class="btn btn-success rounded-circle shadow-sm p-3 mb-5 bg-body rounded colorBtn"
          >
            {" "}
            <EditSharpIcon aria-label="éditer son profil" />
          </Link>
          <p className="Pedit">éditer votre profil</p>
        </div>
        <div className="profilUser">
          <p className="Pedit">contact</p>
          <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-header">
              <p class="text-uppercase fw-bold text-center ">Contact</p>
            </div>
            <div class="card-body">
              <div className="mail">
                <p class="text-uppercase bioCss text-light">Mail :</p>
                <p class="text-center text-light">{mail}</p>
              </div>
              <div className="age">
                <p class="text-uppercase bioCss text-light">Age :</p>
                <p class="text-center text-light">{age}</p>
              </div>
              <div className="city">
                <p class="text-uppercase bioCss text-light">Ville :</p>
                <p class="text-center text-light">{city}</p>
              </div>
            </div>
          </div>
          <div className="contact">
            <p className="Pedit" >modifiez vos contact :</p>
            <PermContactCalendarSharpIcon
             style={{width: "50px" ,height: "50px", padding:"10px" }}
               className="btnIc"
              onClick={ContactPage}
              aria-label="mettre vos contacts"
            />
          </div>
        </div>
        <div className="UserCreation">
          <div className="UserPost">
            <p className="Pedit">Mes messages :</p>
            <div class="feedPost">
              {posts.map((post) => {
                return (
                  <CardEntraideUser message={post.message} type={post.type} />
                );
              })}
            </div>
          </div>
          <div className="deleteUser">
            <p className="Pedit" >Se désinscrire : </p>
            <PersonRemoveSharpIcon
             style={{width: "50px" ,height: "50px", padding:"10px" }}
              onClick={deleteUser}
              aria-label="retirer l'utilisateur"
              className="delete btnIc"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilUser;
