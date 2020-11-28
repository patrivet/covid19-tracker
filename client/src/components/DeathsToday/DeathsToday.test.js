import React from 'react';
import { shallow } from 'enzyme';
import DeathsToday from './DeathsToday';

describe('DeathsToday', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<DeathsToday />);
    expect(wrapper).toMatchSnapshot();
  });
});
