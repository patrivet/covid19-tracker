import React from 'react';
import { shallow } from 'enzyme';
import StatisticValue from './StatisticValue';

describe('StatisticValue', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StatisticValue />);
    expect(wrapper).toMatchSnapshot();
  });
});
