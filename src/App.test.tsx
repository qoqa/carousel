import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders test App without failing', () => {
  const { getByText } = render(<App />);
  const appTitle = getByText(/Test App/i);
  expect(appTitle).toBeInTheDocument();
});
