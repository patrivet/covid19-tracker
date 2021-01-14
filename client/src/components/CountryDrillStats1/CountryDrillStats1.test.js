import React from 'react';
import { shallow } from 'enzyme';
import CountryDrillStats1 from './CountryDrillStats1';

describe('CountryDrillStats1', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountryDrillStats1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
