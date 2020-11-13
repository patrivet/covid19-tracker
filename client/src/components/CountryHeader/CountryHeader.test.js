import React from 'react';
import { shallow } from 'enzyme';
import CountryHeader from './CountryHeader';

describe('CountryHeader', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountryHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
