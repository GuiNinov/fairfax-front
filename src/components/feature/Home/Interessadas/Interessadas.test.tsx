import React from 'react';
import { shallow } from 'enzyme';
import Interessadas from './Interessadas';

describe('Home test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Interessadas />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
