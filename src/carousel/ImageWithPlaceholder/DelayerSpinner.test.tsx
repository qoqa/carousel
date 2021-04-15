import { act, render, screen } from '@testing-library/react';
import DelayedSpinner from './DelayedSpinner';

describe('DelayedSpinner', () => {
  it('should display a spinner after a short while', async () => {
    jest.useFakeTimers();
    render(<DelayedSpinner />);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(await screen.findByTestId('spinner')).toBeInTheDocument();
  });
});
