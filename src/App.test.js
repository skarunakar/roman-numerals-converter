import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app header', () => {
  render(<App />);
  const headerText = screen.getByText(/Roman Numerals Converter/i);
  expect(headerText).toBeInTheDocument();
});


it('renders convertor components and reference chart', () => {
  const { container } = render(<App />);
  const input = container.querySelectorAll('input')
  const table = container.querySelectorAll('table')
  expect(input.length).toEqual(2);
  expect(table.length).toEqual(1);
});