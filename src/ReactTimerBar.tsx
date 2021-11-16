import * as React from 'react';

type ReactTimerProps = {
  name: string;
};

export const ReactTimerBar = (props: ReactTimerProps) => <div>Hello {props.name}!</div>;
