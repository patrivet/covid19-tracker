import React from 'react';
import { shallow } from 'enzyme';
import CasesGlobal from './CasesGlobal';

describe('CasesGlobal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CasesGlobal />);
    expect(wrapper).toMatchSnapshot();
  });
});
