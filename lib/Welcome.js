import React from 'react';
import App from './App.js';
import './ChangeCity.css'
import { Trie } from '@rvwatch/completeMe';
import { cities } from './cities.js'
import './Welcome.css'


export default class Welcome extends React.Component {
  constructor () {
    super();
    this.state = {
        city: '',
        stateName: '',
        location: '',
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
    console.log(this.state.location)
    let splitName = this.state.location.split(', ');
    this.setState({
      city: splitName[0],
      stateName: splitName[1]
    })
    this.props.local(splitName[0], splitName[1]);
    this.props.fetch(splitName[0], splitName[1]);
  }

  render () {
    return (
      <article className='Welcome-Banner'>
        <h1>Welcome to the Weatha, YO!</h1>
        <label htmlFor="welcomeInput" >Enter City</label>
        <input 
          id="welcomeInput" 
          type="text" 
          value={this.state.location} 
          onChange={this.handleInputChange}
        />

        <button onClick={this.handleBtnClick} >Search</button>
        
      </article>
    )
  }
}