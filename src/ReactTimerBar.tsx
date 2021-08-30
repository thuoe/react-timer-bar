import * as React from 'react';

interface ReactTimerProps {
	name: string;
}

export const ReactTimerBar = (props: ReactTimerProps) => <div>Hello {props.name}!</div>;
