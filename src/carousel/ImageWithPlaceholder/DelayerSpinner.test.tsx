import { act, render } from '@testing-library/react';
import DelayedSpinner from './DelayedSpinner';

describe('DelayedSpinner', () => {
  it('should display a spinner after a short while', async () => {
    jest.useFakeTimers();
    const { findByTestId } = render(<DelayedSpinner />);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(await findByTestId('spinner')).toBeInTheDocument();
  });
});
