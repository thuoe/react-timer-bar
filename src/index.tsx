import * as React from 'react';
import styled, { CSSObject } from '@emotion/styled';

export type FlowDirection = 'leftToRight' | 'rightToLeft' | 'bottomToTop' | 'topToBottom';

type OffsetDimension = 'offsetWidth' | 'offsetHeight';

type TimerBarProps = {
  fill: number;
  fillColor: string;
  direction: FlowDirection;
};

export type ReactTimerProps = {
  /** Total progress time in seconds */
  time: number;
  /** Color of the progress bar */
  fillColor: string;
  /** Color of the progress bar */
  direction?: FlowDirection;
  /** Event when timer has ended */
  onEnd?: () => void
  /** Styling options for the timer */
  styles?: CSSObject
};

const Container = styled.div(({ styles }: { styles: CSSObject }) => ({
  position: 'relative',
  backgroundColor: 'red',
  borderRadius: '20px',
  textAlign: 'center',
  overflow: 'hidden',
  ...styles,
}));

const Timerbar = styled.div<TimerBarProps>(({ fill, fillColor, direction }) => {
  const styles: CSSObject = { position: 'absolute', backgroundColor: fillColor, borderRadius: '20px' };

  switch (direction) {
    case 'leftToRight':
      return {
        ...styles,
        height: '100%',
        transition: 'width 200ms',
        backgroundColor: fillColor,
        width: `${fill}px`,
      };
    case 'rightToLeft':
      return {
        ...styles,
        height: '100%',
        transition: 'width 200ms',
        backgroundColor: fillColor,
        width: `${fill}px`,
        right: 0,
      };
    case 'bottomToTop':
      return {
        ...styles,
        width: '100%',
        transition: 'height 200ms',
        height: `${fill}px`,
        bottom: 0,
      };
    case 'topToBottom':
      return {
        ...styles,
        width: '100%',
        transition: 'height 200ms',
        height: `${fill}px`,
        top: 0,
      };
    default:
      break;
  }
});

const formatTime = (newTime: number): string => {
  const minutes = Math.floor(newTime / 60);
  const seconds = newTime - minutes * 60; 
  const secondPrefix = seconds < 10 ? '0' : '';   
  return `${minutes}:${secondPrefix}${seconds}`;
};

export const ReactTimerBar = ({ time = 0, fillColor = 'blue', direction = 'leftToRight', styles, onEnd }: ReactTimerProps): JSX.Element => {
  const container = React.useRef<HTMLDivElement | null>(null);
  const [timeElapsed, setTimeElapsed] = React.useState<number>(0);

  React.useEffect(() => {
    setTimeElapsed(0);
  }, [time]);

  React.useEffect(() => {
    let timerInterval: NodeJS.Timer;
    if (timeElapsed < time) {
      timerInterval = setInterval(() => {
        setTimeElapsed(timeElapsed + 1);
      }, 1000);
    }

    if (onEnd && time === timeElapsed) {
      onEnd();
    }

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timeElapsed]);


  let offsetDimension: OffsetDimension;

  if (direction === 'leftToRight' || direction === 'rightToLeft') {
    offsetDimension = 'offsetWidth';
  }
  if (direction === 'bottomToTop' || direction === 'topToBottom') {
    offsetDimension = 'offsetHeight';
  }

  const finalDimension = container.current?.[offsetDimension] ?? 0;
  const fill = (timeElapsed / time) * finalDimension;

  return (
    <>
      <Container styles={styles} id="container" ref={container}>
        <Timerbar id='progress-bar' direction={direction} fillColor={fillColor} fill={fill}></Timerbar>
        <span title="Time Elapsed">Time Elapsed {formatTime(timeElapsed)}</span>
      </Container>
    </>
  ); 
};