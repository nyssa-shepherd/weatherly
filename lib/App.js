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

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch(`http://api.wunderground.com/api/29c1bf6746efbe5f/conditions/q/CA/San_Francisco.json`)
      .then(response => response.json())
      .then(json => console.log(json))
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