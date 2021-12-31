
import * as React from 'react';
import { screen, render, act, waitFor } from '@testing-library/react';
import { ReactTimerBar } from '../src/ReactTimerBar';

describe('Timer tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('setInterval updates successfully', () => {
    act(() => {
      const intervalSpy = jest.spyOn(global, 'setInterval');
      render(<ReactTimerBar time={5} fillColor="blue"/>);
      act(() => {
        jest.advanceTimersByTime(3000);
      });
      expect(intervalSpy).toHaveBeenCalledTimes(3);
    });
  });
  
  it('Verify time elapsed after a certain period', async () => {
    render(<ReactTimerBar time={5} fillColor="blue"/>);
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    const span = await screen.findByTitle('Time Elapsed');
    await waitFor(() => expect(span.innerHTML).toBe('Time Elapsed 0:04'));
  });

});