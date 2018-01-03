import React, { Component } from 'react';
import MockData from './MockData';
import Card from './Card';
import Cards from './Cards';
import ApiKey from './ApiKey';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  fetchData() {
    let apiObject = fetch('http://api.wunderground.com/api/${ApiKey}/conditions/q/CA/San_Francisco.json')
      .then(response => response.json)
      .then(obj => this.setState(obj))
      .catch(err => console.log('err'))
  }

  render() {
    return (
      <div className='App'>
    
        <Card cardTitle='Weatherly!' MockData={MockData} />


      </div>
      );
  }
}


export default App;