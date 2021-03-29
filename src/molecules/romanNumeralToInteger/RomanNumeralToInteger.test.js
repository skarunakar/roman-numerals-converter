import { render, screen } from '@testing-library/react';
import RomanNumeralToInteger from './RomanNumeralToInteger';

test('renders convertor cards', () => {
    render(<RomanNumeralToInteger />);
    //expect(linkElement).toBeInTheDocument();
});
