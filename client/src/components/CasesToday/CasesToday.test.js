import React from 'react';
import { shallow } from 'enzyme';
import CasesToday from './CasesToday';

describe('CasesToday', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CasesToday />);
    expect(wrapper).toMatchSnapshot();
  });
});
