import React from 'react';


const CurrentWeather = props => {
  return (
    <div className='current-forecast'>
      {console.log(props.weather.current_observation)}
      
    </div>
  )
}

export default CurrentWeather;