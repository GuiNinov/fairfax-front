import React from 'react';
import { shallow } from 'enzyme';
import DashContent from './DashContent';

describe('Home test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<DashContent />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
