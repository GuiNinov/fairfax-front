import React from 'react';
import { shallow } from 'enzyme';
import ScoreContent from './ScoreContent';

describe('Home test', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<ScoreContent />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
