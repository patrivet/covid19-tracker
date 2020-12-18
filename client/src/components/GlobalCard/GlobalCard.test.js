import React from 'react';
import { shallow } from 'enzyme';
import GlobalCard from './GlobalCard';

describe('GlobalCard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<GlobalCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
