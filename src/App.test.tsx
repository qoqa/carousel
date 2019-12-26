import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders test App without failing', () => {
  const { getByText } = render(<App />);
  const carousel = getByText(/carousel/i);
  expect(carousel).toBeInTheDocument();
});
