import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

describe('Label', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper).toMatchSnapshot();
  });
});
