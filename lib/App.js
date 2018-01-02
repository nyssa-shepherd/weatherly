import React, { Component } from 'react';
import MockData from './MockData';
import Card from './Card';
import Cards from './Cards';
import ApiKey from './ApiKey';

const App = () => {

  let apiObject = fetch('http://api.wunderground.com/api/29c1bf6746efbe5f/conditions/q/CA/San_Francisco.json')
    .then(data => data.json)
    .then(data => console.log(data.current_observation))
    .catch(err => console.log('err'))

  return (
    <div className='App'>
  
      <Card cardTitle='Weatherly!' MockData={MockData} />
      {console.log(apiObject.current_observation)}

    </div>
    );
}


export default App;