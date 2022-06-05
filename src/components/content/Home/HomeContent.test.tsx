import React from 'react';
import { shallow } from 'enzyme';
import HomeContent from './HomeContent';

describe('Home test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<HomeContent />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
