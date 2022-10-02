import * as React from 'react';
import './CardEntraide.scss'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { UidContext } from '../AppContext/appContext';
import axios from 'axios';
import { useState } from 'react';



 function CardEntraide() {
  const uid = React.useContext(UidContext)
  const [pseudo,setPseudo]=useState("")
  const [bio,setBio]=useState("")
 
  React.useEffect(() => {
    console.log(uid.userId);
    const Fetch = () => {
      const configuration = {
        method: "get",
        url: `http://localhost:1004/${uid.userId}`,
      };
      axios(configuration)
        .then((result) => {
             setBio(result.data.bio[0].bio)
             setPseudo(result.data.bio[0].pseudo)
        })
        .catch((error) => {
          error = new Error();
        });
    };
    Fetch();
  }, [uid]);

 
  return (
    <Card sx={{ maxWidth:500 , maxHeight : 320 , margin:10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="utilisateur">
          {pseudo}
          </Avatar>
        }
        title="Demande"
        subheader="Hello  les aidants"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, doloribus.
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardEntraide