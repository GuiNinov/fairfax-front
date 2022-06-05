import React from 'react';
import { shallow } from 'enzyme';
import EnviarProposta from './EnviarProposta';

describe('Home test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<EnviarProposta />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
