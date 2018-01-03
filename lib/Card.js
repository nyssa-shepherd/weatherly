import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <article className='card-wrap'>
      <img className='weather-icon' src={props.icon} />
      <h2 className='temp'>{props.temp} &#8457;</h2>
    </article>
  )
}


export default Card;