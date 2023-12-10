import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './demo.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CodeBlock, monoBlue } from 'react-code-blocks';
import { FlowDirection, ReactTimerBar, ReactTimerProps } from '../src';
import styled from '@emotion/styled';


const DemoComponent = ({ snippet, heading, ...rest }: ReactTimerProps & { snippet: string, heading?: string }) => {
  return (
    <div style={{ margin: '0 auto' }}>
      {heading && <h3>{heading}</h3>}
      <ReactTimerBar {...rest} />
      <CodeBlock wrapLongLines customStyle={ { marginTop: '20px', width: '100%' }} theme={monoBlue} language="typescript" text={snippet} showLineNumbers={false} />
    </div>
  );
};

const FlexDirectionDemo = ({ snippet, ...rest }: ReactTimerProps & { snippet: string }) => {
  const heading = rest.direction === 'bottomToTop' ? 'Bottom to Top'
    : rest.direction === 'topToBottom' ? 'Top to Bottom' 
      : rest.direction === 'leftToRight' ? 'Left to Right' 
        : rest.direction === 'rightToLeft' ? 'Right to Left'
          : undefined;
  return (
    <DemoComponent heading={heading} snippet={snippet} {...rest} />
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
  const [direction, setDirection] = React.useState<FlowDirection>('leftToRight');
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

        <h2>Directions</h2>
       
        <select style={{ margin: '0 auto', minWidth: '200px' }} name="Directions" id="direction-select" onChange={(event) => setDirection(event.target.value as FlowDirection)}>
          <option value="leftToRight">Left to Right</option>
          <option value="rightToLeft">Right to Left</option>
          <option value="topToBottom">Top to Bottom</option>
          <option value="bottomToTop">Bottom to Top</option>
        </select>

        <FlexDirectionDemo snippet={`<ReactTimerBar time={20} fillColor="red" direction="${direction}" />`} direction={direction} {...props} />

        <h2>Override Styles</h2>
        <DemoComponent 
          snippet={'ReactTimerBar style={{ width: \'200px\', height: \'300px\', borderRadius: \'25px\' }} time={10} fillColor="blue" />'} 
          styles={{ width: '200px', height: '300px', borderRadius: '25px', margin: '0 auto' }} 
          time={10} 
          fillColor="blue"
        />
      </Card>
    </>
  );
};


ReactDOM.render(<DemoPage/>, document.getElementById('output'));
