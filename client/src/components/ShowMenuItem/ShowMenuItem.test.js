import React from 'react';
import { shallow } from 'enzyme';
import ShowMenuItem from './ShowMenuItem';

describe('ShowMenuItem', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ShowMenuItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
