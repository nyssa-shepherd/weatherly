import React from 'react';
import { mount, shallow } from 'enzyme';
import ChangeCity from '../lib/ChangeCity.js';
import { Trie } from '@rvwatch/completeMe';
import MockData from './MockData';


const mockCitites = [
  'Denver, CO',
  'Chicago, IL',
  'Tampa, FL',
  'San Fransisco, CA',
  'New York City, NY',
  'Dallas, TX'
];

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

  it('should populate the binary trie with the cities from the cities array', () => {
    wrapper.searchComplete = new Trie()
    expect(wrapper.searchComplete).toEqual(new Trie(mockCitites))
    wrapper.searchComplete.populate(mockCitites);
    expect(wrapper.searchComplelte).toEqual(['Denver, CO', 'Chicago, IL', 'Tampa, FL', 'San Fransisco, CA', 'New York City, NY', 'Dallas, TX'])
  })

  it.skip('should change the state of location based on a change in the input value', () => {

  })

  it.skip('should change the state of suggestedWord after a change in the input value', () => {
    //handleInputChange
    console.log(global.localStorage)
  })


  it.skip('should render a datalist and input', () => {
    expect(wrapper.find('datalist').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  })
})