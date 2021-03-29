import { render, fireEvent } from '@testing-library/react';
import ConverterCard from './ConverterCard';

test('renders convertor cards', () => {
    const { container } = render(<ConverterCard />);
    const input = container.querySelectorAll('input')
    expect(input.length).toEqual(1);
});

test('change of input field', () => {
    const { container } = render(<ConverterCard />);
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: 'XC' } })
});