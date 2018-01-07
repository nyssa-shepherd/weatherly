import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHour from '../lib/SevenHour.js';

describe('SevenHour', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })

})
