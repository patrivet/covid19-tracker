import React from 'react';
import { shallow } from 'enzyme';
import CovidCasesLabel from './CovidCasesLabel';

describe('CovidCasesLabel', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CovidCasesLabel />);
    expect(wrapper).toMatchSnapshot();
  });
});
