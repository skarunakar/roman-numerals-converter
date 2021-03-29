import { render, screen } from '@testing-library/react';
import IntegerToRomanNumeral from './IntegerToRomanNumeral';

test('renders convertor cards', () => {
    render(<IntegerToRomanNumeral />);
    //expect(linkElement).toBeInTheDocument();
});
