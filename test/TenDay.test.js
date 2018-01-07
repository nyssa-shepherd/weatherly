import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDay from '../lib/TenDay.js';

describe('TenDay', () => {
  
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<TenDay />)
  })
  
  it.skip('should exist', () => {
    let wrapper = shallow(<TenDay />);
    expect(wrapper).toBeDefined();
  })

})