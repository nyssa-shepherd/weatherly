import React, { Component } from 'react';
import MockData from './MockData';
import Card from './Card';

const App = () => {
  return (
    <div className='App'>

      <h1> Please work! </h1>
      

      <Card cardTitle='Weatherly!' MockData={MockData} />
    </div>
    );
}


export default App;