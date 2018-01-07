import React from 'react';
import { mount, shallow } from 'enzyme';
import ChangeCity from '../lib/ChangeCity.js';
import { Trie } from '@rvwatch/completeMe';

const mockData = {
  location: "Denver, CO",
  city: "Denver",
  state: "CO",
  condition: "Sunny",
  day: "Friday",
  date: "January 7, 2018",
  tempF: "32",
  tempC: "0",
  icon: "http://icons.wxug.com/i/c/k/sunny.gif",
  tempHi: "212°F",
  tempLo: "−459.67°F",
  summary: "Sunny"
};

describe.only('ChangeCity', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChangeCity />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state of city, stateName, and location equal to an empty string', () => {
    expect(wrapper.state().city).toEqual('');
    expect(wrapper.state().stateName).toEqual('');
    expect(wrapper.state().location).toEqual('');
  })

  it('should have a default state of suggestWord equal to an empty array', () => {
    expect(wrapper.state().suggestedWord).toEqual([]);
  })

  it('should create a new instance of the trie', () => {
    wrapper.searchComplete = new Trie()
  })

  it('should populate the binary trie with the cities from the cities array', () => {
    wrapper.searchComplete = new Trie()
    expect(wrapper.searchComplete).toEqual(new Trie())
    // this.searchComplete.populate(cities);
    // expect(wrapper.searchComplelte).toEqual()
  })

  it('should change the state of location based on a change in the input value', () => {
    expect(wrapper.state().location).toEqual('');
    wrapper.setState({location: mockData.location});
    expect(wrapper.state().location).toEqual('Denver, CO');
  })

  it('should change the state of suggestedWord after a change in the input value', () => {
    //handleInputChange
  })

  it('should split the word entered at the comma after the sumbit button is hit', () => {
    wrapper.setState({location: mockData.location});
    let splitName = wrapper.state().location.split(', ');
    expect(splitName).toEqual(['Denver', 'CO']);
  })

  it('should set the state of city to splitName[0]', () => {
    wrapper.setState({location: mockData.location});
    let splitName = wrapper.state().location.split(', ');

    expect(wrapper.state().city).toEqual('');
    wrapper.setState({city: splitName[0]})
  })

  it('should set the state of stateName to splitName[1]', () => {
    //handleButtonClick
  })

  it('should send the city and stateName to local storage', () => {
    //handleButtonClick
  })

  it('should get the api based off of the city and stateName', () => {
    //handleButtonClick
  })

  it('should render a datalist and input', () => {
    expect(wrapper.find('datalist').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  })
})