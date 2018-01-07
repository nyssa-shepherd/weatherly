import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';

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

  it.skip('should render ChangeCity, CurrentWeather, SevenHour, and TenDay Components', () => {
      expect(wrapper.find('TenDay').length).toEqual(1);
  })

})