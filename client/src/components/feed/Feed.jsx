import React from 'react';
import CardEntraide from '../share/CardEntraide';
import './Feed.scss'

const handleSubmit = (e) =>{
    e.preventDefault
  const AllComment =()=>{
    const configuration = {
      method: "get",
      url: `http://localhost:1004/message/allMessage`,
    };
    axios(configuration)
      .then((result) => {
           console.log(result);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  AllComment()

  }


function Feed() {
    return (
        <div class="feed">
            <CardEntraide />
        </div>
    );
}

export default Feed;