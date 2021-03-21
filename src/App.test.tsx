import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should renders test App without failing', () => {
    const { getByText } = render(<App />);
    const appTitle = getByText('Galleries with Carousel in a modal');
    expect(appTitle).toBeInTheDocument();
  });

  it('should open the modal', () => {
    const { getAllByAltText, queryAllByText } = render(<App />);
    getAllByAltText('Image 1')[0].click();
    expect(queryAllByText(/My Gallery/i)[1]).toBeInTheDocument();
  });
});
