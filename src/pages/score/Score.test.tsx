import React from 'react';
import { shallow } from 'enzyme';
import Home from './Score';

describe('Score test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
