import React from 'react';
import App from './App.js';
import './ChangeCity.css'
import { Trie } from '@rvwatch/completeMe';
import { cities } from './cities.js'

export default class ChangeCity extends React.Component {
  constructor () {
    super();
    this.state = {
        city: '',
        state: '',
        location: '',
        locationName: localStorage.getItem('Location'),
        suggestedWord: []
    }
    
    this.searchComplete = new Trie()
    this.searchComplete.populate(cities);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleInputChange (e) {
    this.setState({
      location: e.target.value,
      suggestedWord: this.searchComplete.suggest(e.target.value)
    })
  }

  handleBtnClick (e) {
    let splitName = this.state.location.split(', ');
    this.setState({
      city: splitName[0],
      state: splitName[1],
      locationName: this.state.location
    })
    
    this.props.local(splitName[0], splitName[1]);
    this.props.fetch(splitName[0], splitName[1]);

  }

  render () {
    return (
      <div>
        <label htmlFor="changeCity" >Enter City</label>
        <input 
          id="changeCity" 
          type="text" 
          value={this.state.location} 
          onChange={this.handleInputChange}
          list="suggestions"
        />
        <datalist id="suggestions">
          {
            this.state.suggestedWord.slice(0, 5).map(word => {
              return (<option value={word}></option>)
            })
          }
        </datalist>
        <button onClick={this.handleBtnClick} >Search</button>
        <h2>{this.state.locationName}</h2>
      </div>
    )
  }
}