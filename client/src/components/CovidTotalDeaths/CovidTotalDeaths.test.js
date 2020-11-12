import React from 'react';
import { shallow } from 'enzyme';
import CovidTotalDeaths from './CovidTotalDeaths';

describe('CovidTotalDeaths', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CovidTotalDeaths />);
    expect(wrapper).toMatchSnapshot();
  });
});
