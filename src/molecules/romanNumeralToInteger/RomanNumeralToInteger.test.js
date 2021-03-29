import { render, screen, fireEvent } from '@testing-library/react';
import RomanNumeralToInteger from './RomanNumeralToInteger';

test('renders convertor cards', () => {
    render(<RomanNumeralToInteger />);
    const title = screen.getByText(/Roman Numeral to Integer/i);
    expect(title).toBeInTheDocument();
});

test('change of valid input and display output', () => {
    const { container } = render(<RomanNumeralToInteger />);
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: 'XC' } })
    const displayText = screen.getByText(/90/i);
    expect(displayText).toBeInTheDocument();
});

test('change of invalid input and display error', () => {
    const { container } = render(<RomanNumeralToInteger />);
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: '1234' } })
    const errorText = screen.getByText(/Enter Valid Roman Numeral/i);
    expect(errorText).toBeInTheDocument();
});
