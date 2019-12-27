import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should renders test App without failing', () => {
    const { getByText } = render(<App />);
    const appTitle = getByText(/Test App/i);
    expect(appTitle).toBeInTheDocument();
  });

  it('should open the modal', () => {
    const { getByAltText, queryByText } = render(<App />);
    getByAltText('Image 1').click();
    expect(queryByText('Test Carousel')).toBeInTheDocument();
  });
});
