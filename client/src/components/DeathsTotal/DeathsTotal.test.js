import React from 'react';
import { shallow } from 'enzyme';
import DeathsTotal from './DeathsTotal';

describe('DeathsTotal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<DeathsTotal />);
    expect(wrapper).toMatchSnapshot();
  });
});
