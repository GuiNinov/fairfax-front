import React from 'react';
import { shallow } from 'enzyme';
import ScoreHeader from './ScoreHeader';

describe('Dash header', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<ScoreHeader />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
