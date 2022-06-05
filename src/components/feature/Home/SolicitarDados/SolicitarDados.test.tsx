import React from 'react';
import { shallow } from 'enzyme';
import SolicitarDados from './SolicitarDados';

describe('Home test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<SolicitarDados />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
