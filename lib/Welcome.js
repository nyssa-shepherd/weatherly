import React from 'react';
import App from './App.js';
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
    
    if (isNaN(e.target.value)){
      console.log('wtf')
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
    console.log(this.state.location)
    let splitName = this.state.location.split(', ');
    this.setState({
      city: splitName[0],
      stateName: splitName[1]
    })
    this.props.fetch(this.state.location);
  }

  render () {
    return (
      <article className='Welcome-Banner'>
        <h1>Look out your window...</h1>
        <label htmlFor="welcomeInput" >Enter City</label>
        <div className='input-field'>
        <input 
          id="welcomeInput" 
          placeholder= "Or Enter a location here, idiot..."
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
        </div>
      </article>
    )
  }
}