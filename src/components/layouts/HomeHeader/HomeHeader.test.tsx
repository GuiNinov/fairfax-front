import React from 'react';
import { shallow } from 'enzyme';
import HomeHeader from './HomeHeader';

describe('Home Header Bar test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<HomeHeader />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
