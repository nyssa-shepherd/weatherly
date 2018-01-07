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

})