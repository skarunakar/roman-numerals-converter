import toRoman from './toRoman';

test('returns MMMCMXCIX for integer 3999', () => {
    expect(toRoman('3999')).toBe('MMMCMXCIX');
});

test('returns empty undefined when integer greater then 3999', () => {
    expect(toRoman(4000)).toBe(undefined);
});

test('returns empty undefined when integer equals 0', () => {
    expect(toRoman('0')).toBe(undefined);
});

test('returns empty undefined when input parameter not an integer', () => {
    expect(toRoman('8989ABC')).toBe(undefined);
});