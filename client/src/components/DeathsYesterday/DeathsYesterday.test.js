import React from 'react';
import { shallow } from 'enzyme';
import DeathsYesterday from './DeathsYesterday';

describe('DeathsYesterday', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<DeathsYesterday />);
    expect(wrapper).toMatchSnapshot();
  });
});
