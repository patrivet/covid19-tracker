import React from 'react';
import { shallow } from 'enzyme';
import Sort from './Sort';

describe('Sort', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Sort />);
    expect(wrapper).toMatchSnapshot();
  });
});
