import { render, screen } from '@testing-library/react';
import ConversionReferenceChart from './ConversionReferenceChart';

test('renders 8 rows', () => {
    const { container } = render(<ConversionReferenceChart />);
    const input = container.querySelectorAll('tr')
    expect(input.length).toEqual(8);
});
