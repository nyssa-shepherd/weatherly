import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import MockData from './MockData';

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

  it('should have a default state of weather data equal to null', () => {
    expect(wrapper.state().error).toEqual(false);
  })

  it('should render the Welcome component if localStorage returns null', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  })

  it('should render the Error component if this.state.data = true', () => {
    wrapper.setState({error: true});
    expect(wrapper.state().error).toEqual(true);
    
    expect(wrapper.find('Error').length).toEqual(1);
  })

  it('should render the ChangeCity Component', () => {
    localStorage.setItem('Location', {
      "location": "Denver, C0", 
      "suggestions": []
    });

    wrapper.setState({ weatherData: MockData })
    expect(wrapper.find('ChangeCity').length).toEqual(1)
  })

  it('should render the CurrentWeather Component', () => {
    localStorage.setItem('Location', {
      "location": "Denver, C0", 
      "suggestions": []
    });

    wrapper.setState({ weatherData: MockData })
    expect(wrapper.find('CurrentWeather').length).toEqual(1)
  })

  it('should render the SevenHour Component', () => {
    localStorage.setItem('Location', {
      "location": "Denver, C0", 
      "suggestions": []
    });

    wrapper.setState({ weatherData: MockData })
    expect(wrapper.find('SevenHour').length).toEqual(1)
  })

  it('should render the TenDay Component', () => {
    localStorage.setItem('Location', {
      "location": "Denver, C0", 
      "suggestions": []
    });
    wrapper.setState({ weatherData: MockData })
    expect(wrapper.find('TenDay').length).toEqual(1)
  })

})