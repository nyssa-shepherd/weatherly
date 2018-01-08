import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDay from '../lib/TenDay.js';
import MockData from '../lib/MockData';

describe('TenDay', () => {
  
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<TenDay forecast={MockData.forecast.simpleforecast.forecastday.slice(0, 10)} />)
  })
  
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render 10 Card components', () => {
    expect(wrapper.find('Card').length).toEqual(10);
  })

  it('should render an h2 components', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  })

})