import React from 'react';
import { shallow } from 'enzyme';
import DashHeader from './DashHeader';

describe('Dash header', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<DashHeader />);
  });

  test('', () => {
    console.log(wrapper);
  });
});
