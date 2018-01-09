import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from '../lib/Card.js';

describe('Card', () => {
  
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have an article component', () => {
    expect(wrapper.find('article').length).toEqual(1);
  })

  it('should have a h3 component', () => {
    expect(wrapper.find('h3').length).toEqual(1);
  })

  it('should have a img component', () => {
    expect(wrapper.find('img').length).toEqual(2);
  })

})