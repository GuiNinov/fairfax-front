import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
