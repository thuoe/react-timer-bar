import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactTimerBar } from './ReactTimerBar';

ReactDOM.render(<ReactTimerBar fillColor="blue" time={20} direction="topToBottom" />, document.getElementById('output'));
