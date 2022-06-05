import React from 'react';
import { shallow } from 'enzyme';
import Home from './Dash';

describe('Dash test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
