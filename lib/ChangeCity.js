import React from 'react';

export default class ChangeCity extends React.Component {
  constructor () {
    super();
    this.state = {
        city: 'Denver'
        state: 'Colorado'
    }

    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleCountChange (e) {
    this.setState({
      city: e.target.value
      state: 
    })
  }

  handleBtnClick () {
    this.props.getTrivia(this.state.city);
  }

  render () {
    return (
      <div>
        <label htmlFor="changeCity" >Enter City</label>
        <input 
          id="changeCity" 
          type="text" 
          value={this.state.city} 
          onChange={this.handleCountChange}
        />

        <button onClick={this.handleBtnClick} >Search</button>
      </div>
    )
  }
}