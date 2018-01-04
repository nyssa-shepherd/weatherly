import React from 'react'
import Card from './Card.js'

export default function SevenHourforecast (props) {

  return (
  <section className="seven-hour-wrap">
    <h2>7 Hour Forecast</h2>
    {console.log(props.forecast)}
      { props.forecast.map( hour => 
        <Card 
        time={hour.FCTTIME.civil} 
        hourlyIcon={hour.icon_url}
        hourlyTemp={hour.temp.english}
        /> )}
        {//props.array.map((hour, index) => 
          //<Card key={index} 
                // time={hour.hour} 
                // icon={hour.icon} 
                // temp={[hour.tempF]} />)}
    }
  </section>
  )
}
