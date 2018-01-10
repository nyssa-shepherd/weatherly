import React, { Component } from 'react';
import ChangeCity from './ChangeCity';
import ApiKey from './ApiKey.js';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import Welcome from './Welcome';
import TenDay from './TenDay';
import Error from './Error';
import './globalStyles.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      showForecast: true,
      error: false
    };
    this.fetchData = this.fetchData.bind(this);
    this.toggleForecast = this.toggleForecast.bind(this);
  }

  fetchData(data) {
    fetch(`https://api.wunderground.com/api/${ApiKey}/geolookup/conditions/hourly/forecast10day/q/${data}.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({ weatherData: json, error: false });
        this.sendLocalStorage(this.state.weatherData.current_observation.display_location.full);
      })

      .catch(err => this.setState({error: true}));
  }

  sendLocalStorage(location) {
    localStorage.setItem('Location', location);
  }

  componentDidMount() {
    let location = localStorage.getItem('Location');

    if (location) {
      this.fetchData(location); 
    }
  }

  toggleForecast(e) {
    let sevenDay = document.querySelector('a.seven');
    let tenDay = document.querySelector('a.ten');
    
    if (e.target.innerText === '10 Day') {
      sevenDay.className = 'seven active';
      e.target.className = 'ten';
      this.setState({
        showForecast: false
      });

    } else {
      this.setState({
        showForecast: true
      });
      tenDay.className = 'ten active';
      e.target.className = 'seven';
    }
  }

  render() {

    if (this.state.weatherData === null) {
      return <Welcome fetch={this.fetchData} local={this.sendLocalStorage} />;
    } 

    if (this.state.error) {
      return <Error fetch={this.fetchData} local={this.sendLocalStorage} />;
    } 

    if (this.state.weatherData) {
      return (
        <section className='App'>
          
          <h2 className='city-name'>{this.state.weatherData.current_observation.display_location.full}</h2>
          
          <ChangeCity fetch={this.fetchData}  
                      local={this.sendLocalStorage} 
                      data={this.state.weatherData}
          />
          
          <CurrentWeather weather={this.state.weatherData}
                          time={this.state.weatherData.forecast.simpleforecast.forecastday[0].date.pretty}
                          icon={this.state.weatherData.forecast.simpleforecast.forecastday[0].icon_url}
                          currentTemp={this.state.weatherData.current_observation.temp_f} 
                          conditions={this.state.weatherData.forecast.simpleforecast.forecastday[0].conditions}
                          hi={this.state.weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit}
                          lo={this.state.weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit}
          />
          <ul className='tabs'>
            <li><a onClick={ this.toggleForecast } className='seven' href='#'>7 hour</a></li>
            <li><a onClick={ this.toggleForecast } className='ten active' href='#'>10 day</a></li>
          </ul>
          <article className='module-wrap'>
          {
            this.state.showForecast ? 
            <SevenHour forecast={this.state.weatherData.hourly_forecast.slice(0, 7)} /> : 
            <TenDay forecast={this.state.weatherData.forecast.simpleforecast.forecastday.slice(0, 10)} />
          }
          
          
          </article>
        </section>
      );

    } else {
      return null;
    } 
  }
}

export default App;