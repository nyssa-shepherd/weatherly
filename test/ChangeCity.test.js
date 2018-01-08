import React from 'react';
import { mount, shallow } from 'enzyme';
import ChangeCity from '../lib/ChangeCity.js';
import { Trie } from '@rvwatch/completeMe';
import MockData from '../lib/MockData';


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

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it.skip('should have a default state of city, stateName, and location equal to an empty string', () => {
    expect(wrapper.state().city).toEqual('');
    expect(wrapper.state().stateName).toEqual('');
    expect(wrapper.state().location).toEqual('');
  })

  it.skip('should have a default state of suggestWord equal to an empty array', () => {
    expect(wrapper.state().suggestedWord).toEqual([]);
  })

  it.skip('should create a new instance of the trie', () => {
    wrapper.searchComplete = new Trie()
  })

  it.skip('should populate the binary trie with the cities from the cities array', () => {
    wrapper.searchComplete = new Trie()
    expect(wrapper.searchComplete).toEqual(new Trie(mockCitites))
    // wrapper.searchComplete.populate(mockCitites);
    // expect(wrapper.searchComplelte).toEqual(['Denver, CO', 'Chicago, IL', 'Tampa, FL', 'San Fransisco, CA', 'New York City, NY', 'Dallas, TX'])
  })

  it.skip('should change the state of location based on a change in the input value', () => {
    expect(wrapper.state().location).toEqual('');
    wrapper.setState({location: mockData.location});
    expect(wrapper.state().location).toEqual('Denver, CO');
  })

  it.skip('should change the state of suggestedWord after a change in the input value', () => {
    //handleInputChange
    console.log(global.localStorage)
  })

  it.skip('should split the word entered at the comma after the sumbit button is hit', () => {
    wrapper.setState({location: mockData.location});
    let splitName = wrapper.state().location.split(', ');
    expect(splitName).toEqual(['Denver', 'CO']);
  })

  it.skip('should set the state of city to splitName[0]', () => {
    wrapper.setState({location: mockData.location});
    let splitName = wrapper.state().location.split(', ');

    expect(wrapper.state().city).toEqual('');
    wrapper.setState({city: splitName[0]});
    expect(wrapper.state().city).toEqual('Denver');
  })

  it.skip('should set the state of stateName to splitName[1]', () => {
    wrapper.setState({location: mockData.location});
    let splitName = wrapper.state().location.split(', ');

    expect(wrapper.state().stateName).toEqual('');
    wrapper.setState({stateName: splitName[1]});
    expect(wrapper.state().stateName).toEqual('CO');
  })

  it.skip('should render a datalist and input', () => {
    expect(wrapper.find('datalist').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  })
})