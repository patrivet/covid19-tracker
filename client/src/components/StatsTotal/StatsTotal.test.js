import React from 'react';
import { shallow } from 'enzyme';
import StatsTotal from './StatsTotal';

describe('StatsTotal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StatsTotal />);
    expect(wrapper).toMatchSnapshot();
  });
});
