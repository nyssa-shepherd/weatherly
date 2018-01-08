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
    
    if (isNaN(e.target.value)){
    this.setState({
      location: e.target.value,
      suggestedWord: this.searchComplete.suggest(e.target.value)
      })
    } else {
      this.setState({
      location: e.target.value
      })
    }
  }

  handleBtnClick (e) {
    console.log('first thing run on click' + this.state.location)
    this.setState({
      locationName: this.state.location
    })
    this.props.fetch(this.state.location);

  }

  render () {
    return (
      <section className='change-city'>
        <label htmlFor="changeCity" >Enter City</label>
        <input 
          id="changeCity" 
          type="text" 
          placeholder='Enter Location'
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
        
      </section>
    )
  }
}