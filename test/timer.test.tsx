
import * as React from 'react';
import { screen, render, act, waitFor } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import { ReactTimerBar } from '../src/ReactTimerBar';

expect.extend(matchers);

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
  
  it('Verify progess bar fill width after a certain period', async () => {
    const timeinMs = 6000;
    const advanceTimeinMs = 3000;
    const mockWidth = 500;
    const { container } = render(<ReactTimerBar time={timeinMs / 1000} fillColor="blue"/>);
    act(() => {
      jest.advanceTimersByTime(advanceTimeinMs);
    });
    const mainContainer: HTMLDivElement = container.querySelector('#container');
    const progressBar: HTMLDivElement = container.querySelector('#progress-bar');

    // jsdom cannot support layouts so measurements will always return 0 unless stubbed;
    Object.defineProperty(mainContainer, 'offsetWidth', { configurable: true, value: mockWidth });

    const expectedFillWidth = advanceTimeinMs / timeinMs * mockWidth;
    await waitFor(() => expect(progressBar).toHaveStyleRule('width', `${expectedFillWidth}px`));
  });

});