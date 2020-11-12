import React from 'react';
import { shallow } from 'enzyme';
import CovidDailyDeaths from './CovidDailyDeaths';

describe('CovidDailyDeaths', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CovidDailyDeaths />);
    expect(wrapper).toMatchSnapshot();
  });
});
