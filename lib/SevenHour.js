import React from 'react'
import Card from './Card.js'


export default function SevenHour (props) {

  return (
  <section className="seven-hour-wrap">
    
      {
        props.forecast.map( (hour, index) => 
        <Card 
          
          key={index}
          time={hour.FCTTIME.civil} 
          hourlyIcon={hour.icon_url}
          hourlyTemp={hour.temp.english} /> 
        )
      }

  </section>
  )
}
