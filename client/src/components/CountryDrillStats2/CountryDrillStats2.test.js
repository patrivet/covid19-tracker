import React from 'react';
import { shallow } from 'enzyme';
import CountryDrillStats2 from './CountryDrillStats2';

describe('CountryDrillStats2', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountryDrillStats2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
