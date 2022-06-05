import React from 'react';
import { shallow } from 'enzyme';
import AnalisarDados from './AnalisarDados';

describe('Home test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<AnalisarDados />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
