import * as React from 'react';
import './CardEntraide.scss'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Typography } from '@mui/material';



 function CardEntraide() {

  return (
    <Card sx={{ maxWidth:500 , maxHeight : 320 , margin:10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="utilisateur">
            R
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