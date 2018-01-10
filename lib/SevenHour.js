import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';


export default function SevenHour (props) {

  return (
  <section className="seven-hour-wrap">
    
      {
        props.forecast.map( (hour, index) => 
        <Card key={index}
              time={hour.FCTTIME.civil} 
              hourlyIcon={hour.icon_url}
              hourlyTemp={hour.temp.english} /> 
        )
      }

  </section>
  );
}

SevenHour.propTypes = {
  forecast: PropTypes.array,
  ['forecast.map']: PropTypes.func
};