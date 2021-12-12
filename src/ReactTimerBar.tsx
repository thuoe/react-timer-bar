import * as React from 'react';
import './Timer.css';

type ReactTimerProps = {
  time: number;
  fillColor: string;
};

export const ReactTimerBar = ({ time = 0, fillColor = 'blue' }: ReactTimerProps): JSX.Element => {
  const timerBar = React.useRef<HTMLDivElement | null>(null);
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

  const timerWidth = timerBar.current ? timerBar.current.offsetWidth : 0;
  const fillWidth = (timeElapsed / time) * timerWidth;

  return (
    <>
      <div ref={timerBar} className="timer-container">
        <div className="timer-bar" style={{ backgroundColor: fillColor, width: `${fillWidth}px` } }></div>
        <span title="Time Elapsed">Time Elapsed {formatTime(time)}</span>
      </div>
    </>
  ); 
};