import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './font.css';
import { ReactTimerBar, ReactTimerProps } from '../src';
import styled from '@emotion/styled';


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

const Card = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #A8ABB6',
  borderRadius: '5px',
}));

const DemoPage = () => {
  const props = {
    time: 20,
    fillColor: 'blue',
  };
  return (
    <>
    <Card>
    <h2>Installation</h2>

    <h2>Directions</h2>
    <p>These are various directions you can use...</p>
      <FlexDirectionDemo direction='bottomToTop' {...props} />
      <FlexDirectionDemo direction='topToBottom' {...props}/>
      <FlexDirectionDemo direction='leftToRight' {...props} />
      <FlexDirectionDemo direction='rightToLeft' {...props}/>
    </Card>
    </>
  );
};


ReactDOM.render(<DemoPage/>, document.getElementById('output'));
