import React, { useEffect, useState } from "react";
import Routes from "./components/Routes"
import { uidContext } from "./components/Routes/appContext";
import axios from 'axios'

function App() {
  const {uid,setUid} = useState(null)
  useEffect(()=>{
    const LoginUser = async() =>{
     await  axios({
      method:"get",
      url:`${process.env.REACT_APP_API_URL}login`,
      withCredentials:true
    }).then( (res)=>{ 
      console.log(res);
    })
  }
  LoginUser()
  },[uid])
  return (
    <div>
      <uidContext.Provider value={uid}>
      <Routes/>
      </uidContext.Provider>
    </div>
  );
}

export default App;
