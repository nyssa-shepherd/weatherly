import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <article className='card-wrap'>
      <h2><img src={props.hourlyIcon}/></h2>
      <h3>{props.time || props.day}</h3>

      <img className='weather-icon' src={props.icon} />
      <h2 className='temp'>{props.temp || props.hourlyTemp} &#8457;</h2> 
      <h2>{props.tenHi} / {props.tenLo}&#8457;</h2>
    </article>
  )
}


export default Card;