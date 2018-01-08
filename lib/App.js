import React, { Component } from 'react';
import ChangeCity from './ChangeCity';
import Card from './Card';
import Cards from './Cards';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import Welcome from './Welcome';
import TenDay from './TenDay';
import ApiKey from './ApiKey';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      city: '',
      state: ''
    }
    this.fetchData = this.fetchData.bind(this);
  }

  sendLocalStorage(city, state){
    localStorage.setItem('Location', city + ', ' + state);
  }


  fetchData(city, state) {
    fetch(`http://api.wunderground.com/api/29c1bf6746efbe5f/conditions/forecast10day/hourly/q/${state}/${city}.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({weatherData: json})
      })
      .then(json => console.log(this.state.weatherData))
      .catch(err => console.log('err'))
  }

  componentDidMount() {
    let location = localStorage.getItem('Location').split(', ');
    this.fetchData(location[0], location[1]);
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
    } else if(this.state.weatherData){

    return (
      <div className='App'>
        
        <ChangeCity fetch={this.fetchData}  
                    local={this.sendLocalStorage} 

        />
        <CurrentWeather weather={this.state.weatherData}
                        time={this.state.weatherData.current_observation.local_time_rfc822}
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