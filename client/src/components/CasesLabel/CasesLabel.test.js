import React from 'react';
import { shallow } from 'enzyme';
import CasesLabel from './CasesLabel';

describe('CasesLabel', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CasesLabel />);
    expect(wrapper).toMatchSnapshot();
  });
});
