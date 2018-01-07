import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHour from '../lib/SevenHour.js';
import Card from '../lib/Card.js'

describe('SevenHour', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour />)
  })

  it('should exist', () => {
    expect(Card.wrapper).toBeDefined();
  })

})
