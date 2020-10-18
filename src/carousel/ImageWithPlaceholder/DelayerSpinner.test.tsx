import React from 'react';
import { act, render, screen } from '@testing-library/react';
import DelayedSpinner from './DelayedSpinner';

jest.useFakeTimers();

describe('DelayedSpinner', () => {
  it('should display a spinner after a short while', async () => {
    render(<DelayedSpinner />);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(await screen.findByTestId('spinner')).toBeInTheDocument();
  });
});
