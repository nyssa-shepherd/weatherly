import React from 'react'
import Card from './Card.js'


export default function SevenHour (props) {

  return (
  <section className="seven-hour-wrap">
    <h2>7 Hour Forecast</h2>
    
      { props.forecast.map( hour => 
        <Card 
        time={hour.FCTTIME.civil} 
        hourlyIcon={hour.icon_url}
        hourlyTemp={hour.temp.english}
        /> )}
        {
    }
  </section>
  )
}
