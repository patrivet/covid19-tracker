import React from 'react';
import { shallow } from 'enzyme';
import CountryDrillHeader from './CountryDrillHeader';

describe('CountryDrillHeader', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountryDrillHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
