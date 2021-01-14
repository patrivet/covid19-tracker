import React from 'react';
import { shallow } from 'enzyme';
import CountryDrillView from './CountryDrillView';

describe('CountryDrillView', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountryDrillView />);
    expect(wrapper).toMatchSnapshot();
  });
});
