import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDay from '../lib/TenDay.js';
import MockData from './MockData';

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

  it('should display card components', () => {
    wrapper = mount(<TenDay forecast={MockData.forecast.simpleforecast.forecastday.slice(0, 10)} />)
    expect(wrapper.find('h3').first().text()).toEqual(MockData.forecast.simpleforecast.forecastday[0].date.weekday)
    expect(wrapper.find('h2').first().text()).toEqual('51°f / 32°f')
  })

})