import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  return ( 
    <article className='card-wrap'>
      <img src={props.hourlyIcon}/>
      <h3>{props.time || props.day}</h3>
      <img className='weather-icon' src={props.icon} />
      {
        props.hourlyTemp &&
        <h2 className='temp'>{props.hourlyTemp} &#176;f</h2> 

      }

      {
        props.tenHi && props.tenLo &&
        <h2>{props.tenHi}&#176;f / {props.tenLo}&#176;f</h2>
      }
    </article>
  );
};

Card.propTypes = {
  hourlyIcon: PropTypes.string,
  hourlyTemp: PropTypes.string,
  time: PropTypes.string,
  day: PropTypes.string,
  icon: PropTypes.string,
  tenHi: PropTypes.string,
  tenLo: PropTypes.string
};

export default Card;