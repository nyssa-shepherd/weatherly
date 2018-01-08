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

  it('should have a default state of city, stateName, and location equal to an empty string', () => {
    expect(wrapper.state().city).toEqual('');
    expect(wrapper.state().stateName).toEqual('');
    expect(wrapper.state().location).toEqual('');
  })

  it('should have a default state suggestedWord equal to an empty array', () => {
    expect(wrapper.state().suggestedWord).toEqual([]);
  })

  it('should render an article, h1, input, and button component', () => {
    expect(wrapper.find('article').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  })

})