import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <div>
      <h1>{props.cardTitle}</h1>
      <h2>{props.MockData.current_observation.display_location.full}</h2>
      <img className='weatherIcon' src={props.MockData.current_observation.icon_url} />
      <h2>{props.MockData.current_observation.temp_f} &#8457;</h2>
      <h3>{props.MockData.current_observation.local_time_rfc822}</h3>

      <div className='currentForecast'>
        { 
          props.MockData.forecast.txt_forecast.forecastday.forEach((array) => {
            return array.fcttext;   
          })
        }

      </div>

   </div>



    )
}


export default Card;