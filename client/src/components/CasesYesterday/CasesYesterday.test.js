import React from 'react';
import { shallow } from 'enzyme';
import CasesYesterday from './CasesYesterday';

describe('CasesYesterday', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CasesYesterday />);
    expect(wrapper).toMatchSnapshot();
  });
});
