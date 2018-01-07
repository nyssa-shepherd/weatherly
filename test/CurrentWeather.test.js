import React from 'react';
import { mount, shallow } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';

describe('CurrentWeather', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have an h3 of time and an h3 of hi and lo', () => {
    expect(wrapper.find('h3').length).toEqual(2);
  })

  it('should have an h2 element', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  })

  it('should have an img', () => {
    expect(wrapper.find('img').length).toEqual(1);
  })

  it('should have an p element', () => {
    expect(wrapper.find('p').length).toEqual(1);
  })

})