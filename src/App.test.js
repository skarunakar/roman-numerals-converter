import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app header', () => {
  render(<App />);
  const headerText = screen.getByText(/Roman Numerals Converter/i);
  expect(headerText).toBeInTheDocument();
});
