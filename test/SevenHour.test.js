import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHour from '../lib/SevenHour.js';

const mockArray = [
  {hour: "7:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "36"},
  {hour: "8:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "37"},
  {hour: "9:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "38"},
  {hour: "10:00 AM", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", tempF: "39"},
  {hour: "11:00 AM", icon: "http://icons.wxug.com/i/c/k/clear.gif", tempF: "41"},
  {hour: "12:00 PM", icon: "http://icons.wxug.com/i/c/k/clear.gif", tempF: "44"},
  {hour: "1:00 PM", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", tempF: "48"}
]

describe.only('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour />)
  })

   it('should exist', () => {
    const SevenHour = shallow(<SevenHour forecast={mockArray}/>);
    expect(SevenHour).toBeDefined();
  });

  it('should render a h2', () => {
    console.log(wrapper)
    expect(wrapper.find('h2').length).toEqual(1);
    
  })

})
