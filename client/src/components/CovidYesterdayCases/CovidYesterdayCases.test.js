import React from 'react';
import { shallow } from 'enzyme';
import CovidYesterdayCases from './CovidYesterdayCases';

describe('CovidYesterdayCases', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CovidYesterdayCases />);
    expect(wrapper).toMatchSnapshot();
  });
});
