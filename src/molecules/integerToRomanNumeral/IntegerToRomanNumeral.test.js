import { render, screen, fireEvent } from '@testing-library/react';
import IntegerToRomanNumeral from './IntegerToRomanNumeral';

test('renders convertor cards', () => {
    render(<IntegerToRomanNumeral />);
    const title = screen.getByText(/Integer to Roman Numeral/i);
    expect(title).toBeInTheDocument();
});

test('change of valid input and display output', () => {
    const { container } = render(<IntegerToRomanNumeral />);
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: '90' } })
    const displayText = screen.getByText(/XC/i);
    expect(displayText).toBeInTheDocument();
});

test('change of invalid input and display error', () => {
    const { container } = render(<IntegerToRomanNumeral />);
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: '0' } })
    const errorText = screen.getByText(/Enter Number between 0 and 3999/i);
    expect(errorText).toBeInTheDocument();
});
