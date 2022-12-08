import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactTimerBar, FlowDirection } from './ReactTimerBar';

type DemoProps = {
  direction: FlowDirection
};

const FlexDirectionDemo = ({ direction }: DemoProps) => {
  const heading = direction === 'bottomToTop' ? 'Bottom to top'
    : direction === 'topToBottom' ? 'Top to Bottom' 
      : direction === 'leftToRight' ? 'Left to Right' 
        : direction === 'rightToLeft' ? 'Right to Left'
          : undefined;
  return (
    <div style={{ margin: '0 auto' }}>
      <h2>{heading}</h2>
      <ReactTimerBar fillColor="blue" time={20} direction={direction}/>
    </div>
  );
};

const DemoPage = () => {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column'  }}>
    <p>These are various directions you can use...</p>
      <FlexDirectionDemo direction='bottomToTop' />
      <FlexDirectionDemo direction='topToBottom' />
      <FlexDirectionDemo direction='leftToRight' />
      <FlexDirectionDemo direction='rightToLeft' />
    </div>
    </>
  );
};


ReactDOM.render(<DemoPage/>, document.getElementById('output'));
