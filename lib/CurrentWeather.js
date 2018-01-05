import React from 'react';


const CurrentWeather = props => {

  
  
  return (
    <div className='current-forecast'>
      <h3>{props.time}</h3>
      <h2>
        <img src={props.icon} /> 
        {props.currentTemp}&#8457;
      </h2>
      <p>Currently: {props.conditions}</p>
      <h3>{props.hi}&#8457; / {props.lo}&#8457;</h3>
    </div>
  )
}

export default CurrentWeather;