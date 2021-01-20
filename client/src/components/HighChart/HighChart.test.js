import React from 'react';
import { shallow } from 'enzyme';
import HighChart from './HighChart';

describe('HighChart', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<HighChart />);
    expect(wrapper).toMatchSnapshot();
  });
});
