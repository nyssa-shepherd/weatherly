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

})