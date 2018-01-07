import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import MockData from '../lib/MockData';

global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return JSON.stringify(global.localStorage[keyword]);
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};

const mockCitites = [
  'Denver, CO',
  'Chicago, IL',
  'Tampa, FL',
  'San Fransisco, CA',
  'New York City, NY',
  'Dallas, TX'
];

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state of weather data equal to null', () => {
    expect(wrapper.state().weatherData).toEqual(null);
  })

  it('should get the location from local storage and split it at the comma', () => {
    
  })

  it('should render the ChangeCity Component', () => {
    expect(wrapper.state().weatherData).toEqual(null);
    wrapper.setState({weatherData: MockData});
    expect(wrapper.state().weatherData).toEqual(MockData);
    expect(wrapper.find('ChangeCity').length).toEqual(1);
  })

  it('should render the CurrentWeather Component', () => {
    expect(wrapper.state().weatherData).toEqual(null);
    wrapper.setState({weatherData: MockData});
    expect(wrapper.state().weatherData).toEqual(MockData);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
  })

  it('should render the SevenHour Component', () => {
    expect(wrapper.state().weatherData).toEqual(null);
    wrapper.setState({weatherData: MockData});
    expect(wrapper.state().weatherData).toEqual(MockData);
    expect(wrapper.find('SevenHour').length).toEqual(1);
  })

  it('should render the TenDay Component', () => {
    expect(wrapper.state().weatherData).toEqual(null);
    wrapper.setState({weatherData: MockData});
    expect(wrapper.state().weatherData).toEqual(MockData);
    expect(wrapper.find('TenDay').length).toEqual(1);
  })

})