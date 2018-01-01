import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <div>

      <h1>{props.cardTitle}</h1>
      <h2>{props.MockData.current_observation.display_location.full}</h2>
   </div>



    )
}


export default Card;