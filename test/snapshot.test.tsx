import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ReactTimerBar } from '../src';


describe('Basic snapshot test', () => {

  it('renders succesfully', () => {
    const tree = renderer
      .create(<ReactTimerBar time={30} fillColor='red' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
