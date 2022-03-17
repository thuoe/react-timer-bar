import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactTimerBar } from './ReactTimerBar';

ReactDOM.render(<ReactTimerBar fillColor="blue" time={5} direction="leftToRight" />, document.getElementById('output'));
