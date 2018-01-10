import React from 'react';
import { mount, shallow } from 'enzyme';
import ChangeCity from '../lib/ChangeCity.js';
import { Trie } from '@rvwatch/completeMe';
import MockData from './MockData';

describe('ChangeCity', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChangeCity fetch={MockData.fetchData}
                                  local={MockData.sendLocalStorage}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state of location and suggestedWord', () => {
    expect(wrapper.state().location).toEqual('');
    expect(wrapper.state().suggestedWord).toEqual([]);
  })

  it('should create a new instance of the trie', () => {
    wrapper.searchComplete = new Trie()
  })

  it('should update state with a location', () => {
    expect(wrapper.state().location).toEqual('')
    wrapper.setState({ location: 'Denver, CO' })
    expect(wrapper.state().location).toEqual('Denver, CO');
  })

  it('should update state with suggestions', () => {
    expect(wrapper.state().suggestedWord).toEqual([])
    wrapper.setState({ suggestedWord  : ['Denver, CO', 'Dayton, OH', 'Dallas, TX', 'Daytona Beach, FL', 'Douglas, AL'] })
    expect(wrapper.state().suggestedWord).toEqual(['Denver, CO', 'Dayton, OH', 'Dallas, TX', 'Daytona Beach, FL', 'Douglas, AL']);
  })

  it('should render a datalist and input', () => {
    expect(wrapper.find('datalist').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  })

  it('should 5 option elements when state has suggestions', () => {
    expect(wrapper.find('option').length).toEqual(0)
    wrapper.setState({ location: 'Denver, CO' })
    wrapper.setState({ suggestedWord: ['Denver, CO', 'Dayton, OH', 'Dallas, TX', 'Daytona Beach, FL', 'Douglas, AL'] })
    expect(wrapper.find('option').length).toEqual(5)
  })


  it('should set the location state when user types in a location', () => {
    expect(wrapper.state().location).toEqual('')
    wrapper.find('input').simulate('change', {target: {value: 'Denver, CO'}})
    expect(wrapper.state().location).toEqual('Denver, CO')
  })
})