import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './font.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CodeBlock, monoBlue } from 'react-code-blocks';
import { ReactTimerBar, ReactTimerProps } from '../src';
import styled from '@emotion/styled';


const FlexDirectionDemo = ({ direction, snippet, ...rest }: ReactTimerProps & { snippet: string }) => {
  const heading = direction === 'bottomToTop' ? 'Bottom to Top'
    : direction === 'topToBottom' ? 'Top to Bottom' 
      : direction === 'leftToRight' ? 'Left to Right' 
        : direction === 'rightToLeft' ? 'Right to Left'
          : undefined;
  return (
    <div style={{ margin: '0 auto' }}>
      <h2>{heading}</h2>
      <ReactTimerBar {...rest} direction={direction}/>
      <CodeBlock wrapLongLines customStyle={ { marginTop: '20px', width: '100%' }} theme={monoBlue} language="typescript" text={snippet} showLineNumbers={false} />
    </div>
  );
};

const Card = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid hsla(203, 50%, 30%, 0.15)',
  boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
  borderRadius: '5px',
  padding: '0% 2% 0% 2%',
}));

const DemoPage = () => {
  const props = {
    time: 20,
    fillColor: 'blue',
  };
  
  return (
    <>
      <Card>
        <h2>Installation:</h2>

        <p>NPM:</p>
        <CodeBlock text='npm install @thuoe/react-timer-bar' showLineNumbers={false} wrapLongLines />

        <p>Yarn:</p>
        <CodeBlock text='yarn add @thuoe/react-timer-bar' showLineNumbers={false} wrapLongLines />

        <h2>Get started:</h2>
        <CodeBlock 
          wrapLongLines
          language='typescript'
          text={
            `
            import { ReactTimerBar } from '@thuoe/react-timer-bar'
            const MyComponent = () => { 
              return (
                <ReactTimerBar time={20} fillColor="red" direction="leftToRight" />
              )
            }
            export default MyComponent
            `
          } 
          showLineNumbers={false} />

        <h2>Directions:</h2>
        <p>These are various directions props you can use...</p>
        <FlexDirectionDemo snippet='<ReactTimerBar time={20} fillColor="red" direction="bottomToTop" />' direction='bottomToTop' {...props} />
        <FlexDirectionDemo snippet='<ReactTimerBar time={20} fillColor="red" direction="topToBottom" />' direction='topToBottom' {...props}/>
        <FlexDirectionDemo snippet='<ReactTimerBar time={20} fillColor="red" direction="leftToRight" />' direction='leftToRight' {...props} />
        <FlexDirectionDemo snippet='<ReactTimerBar time={20} fillColor="red" direction="rightToLeft" />' direction='rightToLeft' {...props}/>
      </Card>
    </>
  );
};


ReactDOM.render(<DemoPage/>, document.getElementById('output'));
