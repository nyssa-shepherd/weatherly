import React from 'react';
import App from './App.js';
import './Error.css';
import ChangeCity from './ChangeCity.js'
import { Trie } from '@rvwatch/completeMe';
import { cities } from './cities.js'

export default function Error(props) {
  return (
    <div className="error">
      <h1>Error</h1>
      <ChangeCity fetch={props.fetch} local={props.local}/>
      <h3 className="error-message">
        Please enter a valid City, State or Zip Code.
      </h3>
    </div>
  );
}