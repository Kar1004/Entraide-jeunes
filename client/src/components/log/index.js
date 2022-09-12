import React, { useState } from 'react';
import Connecter from './Connecter';
import Inscription from './Inscription';

function ProfilForm(props) {
   const [connectionBox,setConnectionBox]=useState(props.connection);
 const   [inscriptionBox,setInscriptionBox]=useState(props.inscription)

    const HandleBox = (event) =>{
        if(event.target.id === "inscription"){
            setConnectionBox(false);
            setInscriptionBox(true);
        }
        else if(event.target.id === "connection"){
            setConnectionBox(true);
            setInscriptionBox(false);
        }
    }
    return (
        <div>
         <div className='form'>
            <ul>
                <li onClick={HandleBox} id="connection">
                   se connecter
                </li>
                <li onClick={HandleBox} id="inscription">
                    s'inscrire
                </li>
            </ul>
          {connectionBox && <Connecter />}
          {inscriptionBox && <Inscription />}
         </div> 
        </div>
    );
}

export default ProfilForm;