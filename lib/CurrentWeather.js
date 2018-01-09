import React from 'react';
import './CurrentWeather.css'

const CurrentWeather = props => {
  return (
    <section className='current-forecast'>
      <h3>{props.time}</h3>
      <h2>
        <img src={props.icon} /> 
        {props.currentTemp}&#176;f
      </h2>
      <p>Currently: {props.conditions}</p>
      <h3>high {props.hi}&#176;f / low {props.lo}&#176;f</h3>
    </section>
  )
}

export default CurrentWeather;