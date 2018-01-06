import React from 'react';
import App from './App.js';
import { Trie } from '@rvwatch/completeMe'

export default class ChangeCity extends React.Component {
  constructor () {
    super();
    this.state = {
        city: '',
        stateName: '',
        location: ''
    }

    this.searchComplete = new Trie()
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleInputChange (e) {
    this.setState({
      location: e.target.value,
    })
  }

  handleBtnClick (e) {
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
      <div>
        <label htmlFor="changeCity" >Enter City</label>
        <input 
          id="changeCity" 
          type="text" 
          value={this.state.location} 
          onChange={this.handleInputChange}
        />

        <button onClick={this.handleBtnClick} >Search</button>
        <h2>{this.state.city}, {this.state.stateName}</h2>
      </div>
    )
  }
}