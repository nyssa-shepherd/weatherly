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
      weatherData: null,
      city: 'Denver',
      state: 'CO',
      currentTemp: MockData.current_observation.temp_f,
      hi: MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      lo: MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      conditions: MockData.forecast.simpleforecast.forecastday[0].conditions,
      sevenHour: MockData.hourly_forecast.slice(0, 7),
      tenDay: MockData.forecast.simpleforecast.forecastday.slice(0, 10)
    }
    //this.currentTemp = this.state.weatherData.current_observation.temp_f
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData('Denver', 'CO');
  }
  
  fetchData(city, stateName) {
    fetch(`http://api.wunderground.com/api/29c1bf6746efbe5f/conditions/forecast10day/hourly/q/${stateName}/${city}.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({weatherData: json})
      })
      .catch(err => console.log('err'))
  }

  render() {
    return (
      this.state.weatherData &&
      <div className='App'>
        <ChangeCity fetch={this.fetchData} />
        <CurrentWeather weather={this.state.weatherData}
                        time={this.state.weatherData.current_observation.local_time_rfc822}
                        icon={this.state.weatherData.forecast.simpleforecast.forecastday[0].icon_url}
                        currentTemp={this.state.weatherData.current_observation.temp_f} 
                        conditions={this.state.weatherData.forecast.simpleforecast.forecastday[0].conditions}
                        hi={this.state.weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit}
                        lo={this.state.weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit}
        />

        <SevenHourforecast forecast={this.state.sevenHour} />
        <TenDay forecast={this.state.tenDay} />

      </div>
      );
  }
}


export default App;