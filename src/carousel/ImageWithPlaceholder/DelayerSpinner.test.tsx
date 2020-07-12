import React from 'react';
import { act, render } from '@testing-library/react';
import DelayedSpinner from './DelayedSpinner';

jest.useFakeTimers();

describe('DelayedSpinner', () => {
  it('should display a spinner after a short while', async () => {
    const { findByTestId } = render(<DelayedSpinner />);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(await findByTestId('spinner')).toBeInTheDocument();
  });
});
