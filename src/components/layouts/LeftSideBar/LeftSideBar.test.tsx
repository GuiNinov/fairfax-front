import React from 'react';
import { shallow } from 'enzyme';
import LeftSideBar from './LeftSideBar';

describe('Left Side Bar test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<LeftSideBar />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
