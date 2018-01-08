import React, { Component } from 'react';
import ChangeCity from './ChangeCity';
import Card from './Card';
import Cards from './Cards';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import Welcome from './Welcome';
import TenDay from './TenDay';
import ApiKey from './ApiKey';
import Error from './Error'
import './globalStyles.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      city: '',
      state: '',
      error: false
    }
    this.fetchData = this.fetchData.bind(this);
  }

  sendLocalStorage(city, state){
    localStorage.setItem('Location', city + ', ' + state);
  }


  fetchData(data) {
    console.log('fetch function ' + data)
    fetch(`https://api.wunderground.com/api/${ApiKey}/geolookup/conditions/hourly/forecast10day/q/${data}.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          weatherData: json,
          error: false
        })
      })
      .catch(err => this.setState({error: true}))
  }

  componentDidMount() {
    let location = localStorage.getItem('Location').split(', ');
    this.fetchData(localStorage.getItem('Location'));
    this.setState({
      city: location[0],
      state: location[1]
    })
  }

  render() {
    if(this.state.weatherData === null){
      return (
        <Welcome fetch={this.fetchData} local={this.sendLocalStorage} />
      );
    } 
    if(this.state.error){
      return (
        <Error fetch={this.fetchData} local={this.sendLocalStorage} />
      );
    } 

    if(this.state.weatherData){

    return (
      <div className='App'>
        <ChangeCity 
        fetch={this.fetchData}  
        local={this.sendLocalStorage} 

        />
        <CurrentWeather weather={this.state.weatherData}
                        time={this.state.weatherData.forecast.simpleforecast.forecastday[0].date.pretty}
                        icon={this.state.weatherData.forecast.simpleforecast.forecastday[0].icon_url}
                        currentTemp={this.state.weatherData.current_observation.temp_f} 
                        conditions={this.state.weatherData.forecast.simpleforecast.forecastday[0].conditions}
                        hi={this.state.weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit}
                        lo={this.state.weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit}
        />

        <SevenHour forecast={this.state.weatherData.hourly_forecast.slice(0, 7)} />
        <TenDay forecast={this.state.weatherData.forecast.simpleforecast.forecastday.slice(0, 10)} />
      </div>
      );
    } else {
      return null
    } 
  }
}

export default App;