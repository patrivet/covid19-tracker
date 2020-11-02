import React from 'react';
import { shallow } from 'enzyme';
import CountryCard from './CountryCard';

describe('CountryCard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountryCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
