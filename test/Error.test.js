import React from 'react';
import { mount, shallow } from 'enzyme';
import Error from '../lib/Error.js';

describe('Error', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Error />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a h1 component', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').first().text()).toEqual('Error');
  })

  it('should render a h3 component', () => {
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h3').first().text()).toEqual('Please enter a valid City, State or Zip Code.')
  })

  it('should render a ChangeCity component', () => {
    expect(wrapper.find('ChangeCity').length).toEqual(1);
  })
  
})