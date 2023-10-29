import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactTimerBar, ReactTimerProps } from '../src';


const FlexDirectionDemo = ({ direction, ...rest }: ReactTimerProps) => {
  const heading = direction === 'bottomToTop' ? 'Bottom to top'
    : direction === 'topToBottom' ? 'Top to Bottom' 
      : direction === 'leftToRight' ? 'Left to Right' 
        : direction === 'rightToLeft' ? 'Right to Left'
          : undefined;
  return (
    <div style={{ margin: '0 auto' }}>
      <h2>{heading}</h2>
      <ReactTimerBar {...rest} direction={direction}/>
    </div>
  );
};

const DemoPage = () => {
  const props = {
    time: 20,
    fillColor: 'blue',
  };
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <p>These are various directions you can use...</p>
      <FlexDirectionDemo direction='bottomToTop' {...props} />
      <FlexDirectionDemo direction='topToBottom' {...props}/>
      <FlexDirectionDemo direction='leftToRight' {...props} />
      <FlexDirectionDemo direction='rightToLeft' {...props}/>
    </div>
    </>
  );
};


ReactDOM.render(<DemoPage/>, document.getElementById('output'));
