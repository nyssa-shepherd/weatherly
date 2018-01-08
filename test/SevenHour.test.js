import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHour from '../lib/SevenHour.js';
import Card from '../lib/Card.js'
import MockData from '../lib/MockData';

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour forecast={MockData.hourly_forecast.slice(0, 7)} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a Card component', () => {
    expect(wrapper.find('Card').length).toEqual(7);
  })

  it('should render a Card component', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  })

})
