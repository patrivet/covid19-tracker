import React from 'react';
import { shallow } from 'enzyme';
import CovidDailyCases from './CovidDailyCases';

describe('CovidDailyCases', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CovidDailyCases />);
    expect(wrapper).toMatchSnapshot();
  });
});
