import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should renders test App without failing', () => {
    render(<App />);

    expect(
      screen.getByText('Galleries with Carousel in a modal')
    ).toBeInTheDocument();
  });

  it('should open the modal', () => {
    render(<App />);

    screen.getAllByAltText('Image 1')[0].click();
    expect(screen.queryAllByText(/My Gallery/i)[1]).toBeInTheDocument();
  });
});
