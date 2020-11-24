import React from 'react';
import { shallow } from 'enzyme';
import CovidYesterdayDeaths from './CovidYesterdayDeaths';

describe('CovidYesterdayDeaths', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CovidYesterdayDeaths />);
    expect(wrapper).toMatchSnapshot();
  });
});
