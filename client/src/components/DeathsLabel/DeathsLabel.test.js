import React from 'react';
import { shallow } from 'enzyme';
import DeathsLabel from './DeathsLabel';

describe('DeathsLabel', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<DeathsLabel />);
    expect(wrapper).toMatchSnapshot();
  });
});
