import React from 'react';
import { shallow } from 'enzyme';
import CasesTotal from './CasesTotal';

describe('CasesTotal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CasesTotal />);
    expect(wrapper).toMatchSnapshot();
  });
});
