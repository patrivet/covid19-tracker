import React from 'react';
import { shallow } from 'enzyme';
import CovidDeathsLabel from './CovidDeathsLabel';

describe('CovidDeathsLabel', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CovidDeathsLabel />);
    expect(wrapper).toMatchSnapshot();
  });
});
