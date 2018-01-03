import React from 'react';


const CurrentWeather = props => {
  return (
    <div className='current-forecast'>
      <h3>{props.MockData.current_observation.local_time_rfc822}</h3>
      <h2>
        <img src={props.icon} />
        {props.currentTemp}&#8457;
      </h2>
      <p>Currently: {props.conditions}</p>

      <h3>Today's Weather</h3>
      <div className='high-low'>
          <h3>{props.hi}&#8457; / {props.lo}&#8457;</h3>
      </div>
      <p>{ props.MockData.forecast.txt_forecast.forecastday[0].fcttext }</p>
    </div>
  )
}

export default CurrentWeather;