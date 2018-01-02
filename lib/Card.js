import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <section className='card-wrap'>
      <header>
        <h2 className='location'>{props.MockData.current_observation.display_location.full}</h2>
      </header>
      <article>
        <img className='weather-icon' src={props.MockData.current_observation.icon_url} />
        <h2 className='current-temp'>{props.MockData.current_observation.temp_f} &#8457;</h2>
        <div className='high-low'>
          <h3></h3>
        </div>
        <h3>{props.MockData.current_observation.local_time_rfc822}</h3>
      </article>
      <div className='current-forecast'>
        <p>{ props.MockData.forecast.txt_forecast.forecastday[0].fcttext }</p>
      </div>

   </section>



    )
}


export default Card;