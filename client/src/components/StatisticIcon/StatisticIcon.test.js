import React from 'react';
import { shallow } from 'enzyme';
import StatisticIcon from './StatisticIcon';

describe('StatisticIcon', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StatisticIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
