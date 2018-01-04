import React, { Component } from 'react';
import MockData from './MockData';
import ChangeCity from './ChangeCity'
import Card from './Card';
import Cards from './Cards';
import CurrentWeather from './CurrentWeather';
import SevenHourforecast from './SevenHour';
import TenDay from './TenDay'
import ApiKey from './ApiKey';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Denver',
      state: 'CO',
      icon: MockData.current_observation.icon_url,
      currentTemp: MockData.current_observation.temp_f,
      hi: MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      lo: MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      conditions: MockData.forecast.simpleforecast.forecastday[0].conditions,
      sevenHour: MockData.hourly_forecast.slice(0, 7),
      tenDay: MockData.forecast.simpleforecast.forecastday.slice(0, 10)
    }
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData(city, stateName) {
    console.log('POW')
    console.log(city);
    console.log(stateName);
    fetch(`http://api.wunderground.com/api/29c1bf6746efbe5f/conditions/q/${stateName}/${city}.json`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log('err'))
  }

  render() {
    return (
      <div className='App'>
        <ChangeCity fetch={this.fetchData} />
        <CurrentWeather 
              MockData={MockData} 
              location={this.state.city}
              icon={this.state.icon}
              currentTemp={this.state.currentTemp}
              conditions={this.state.conditions}
              hi={this.state.hi}
              lo={this.state.lo}
        />

        <SevenHourforecast forecast={this.state.sevenHour} />
        <TenDay forecast={this.state.tenDay} />

      </div>
      );
  }
}


export default App;