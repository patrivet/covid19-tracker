import React from 'react';
import { shallow } from 'enzyme';
import CountriesList from './CountriesList';

describe('CountriesList', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountriesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
