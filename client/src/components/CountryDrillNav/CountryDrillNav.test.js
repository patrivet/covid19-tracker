import React from 'react';
import { shallow } from 'enzyme';
import CountryDrillNav from './CountryDrillNav';

describe('CountryDrillNav', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountryDrillNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
