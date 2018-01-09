import React from 'react';
import './CurrentWeather.css'

const CurrentWeather = props => {
  return (
    <section className='current-forecast'>
      
      <h2 className='current-main'>
        <img src={props.icon} /> 
        {props.currentTemp}&#176;f
      </h2>
      <h3 className='hi-lo'>h {props.hi}&#176;f / l {props.lo}&#176;f</h3>
      <p>Currently: {props.conditions} @ {props.time}</p>
      <h3 className='display-time'></h3>
    </section>
  )
}

export default CurrentWeather;