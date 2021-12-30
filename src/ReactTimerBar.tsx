import * as React from 'react';
import styled from '@emotion/styled';
import './Timer.css';

type TimerBarProps = {
  fillColor: string;
  fillWidth: number;
};

type ReactTimerProps = {
  time: number;
  fillColor: string;
};

const Container = styled.div(() => ({
  position: 'relative',
  backgroundColor: 'red',
  borderRadius: '3px',
  width: '300px',
  height: '100px',
  textAlign: 'center',
}));

const Timerbar = styled.div<TimerBarProps>(({ fillWidth, fillColor }) => ({
  position: 'relative',
  height: '100%',
  transition: 'width 200ms',
  backgroundColor: fillColor,
  width: `${fillWidth}px`,
}));

export const ReactTimerBar = ({ time = 0, fillColor = 'blue' }: ReactTimerProps): JSX.Element => {
  const container = React.useRef<HTMLDivElement | null>(null);
  const [timeElapsed, setTimeElapsed] = React.useState<number>(0);

  function formatTime(newTime: number): string {
    const minutes = Math.floor(newTime / 60);
    const seconds = newTime - minutes * 60; 
    const secondPrefix = seconds < 10 ? '0' : '';   
    return `${minutes}:${secondPrefix}${seconds}`;
  }

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
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timeElapsed]);

  const timerWidth = container.current ? container.current.offsetWidth : 0;
  const fillWidth = (timeElapsed / time) * timerWidth;

  return (
    <>
      <Container ref={container}>
        <Timerbar fillColor={fillColor} fillWidth={fillWidth}></Timerbar>
        <span title="Time Elapsed">Time Elapsed {formatTime(time)}</span>
      </Container>
    </>
  ); 
};