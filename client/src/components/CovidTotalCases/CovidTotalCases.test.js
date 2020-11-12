import React from 'react';
import { shallow } from 'enzyme';
import CovidTotalCases from './CovidTotalCases';

describe('CovidTotalCases', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CovidTotalCases />);
    expect(wrapper).toMatchSnapshot();
  });
});
