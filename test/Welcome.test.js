import React from 'react';
import { mount, shallow } from 'enzyme';
import Welcome from '../lib/Welcome.js';

describe('Welcome', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the h1 component', () => {
    expect(wrapper.find('h1').length).toEqual(1)
    expect(wrapper.find('h1').first().text()).toEqual('You must be in a basement somewhere...')
  })

  it('should render the ChangeCity component', () => {
    expect(wrapper.find('ChangeCity').length).toEqual(1)
  })

})