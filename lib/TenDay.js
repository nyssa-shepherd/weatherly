import React from 'react';
import Card from './Card.js';

export default function TenDay(props) {
  return (
    <div>
      <h2>10 Day Forecast</h2>
      {
        props.forecast.map(day => 
          <Card 
            day={day.date.weekday} 
            icon={day.icon_url}
            tenHi={day.high.fahrenheit}
            tenLo={day.low.fahrenheit}
          /> 
        )
      }
    </div>
  )
}