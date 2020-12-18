import React from 'react';
import { shallow } from 'enzyme';
import DeathsGlobal from './DeathsGlobal';

describe('DeathsGlobal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<DeathsGlobal />);
    expect(wrapper).toMatchSnapshot();
  });
});
