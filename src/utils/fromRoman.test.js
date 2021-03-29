import fromRoman from './fromRoman';

test('returns 90 for XC', () => {
    expect(fromRoman('XC')).toBe(90);
});

test('returns 200 for cC', () => {
    expect(fromRoman('cC')).toBe(200);
});

test('returns 3 for III', () => {
    expect(fromRoman('III')).toBe(3);
});

test('returns 90  even for lowercase roman numberals', () => {
    expect(fromRoman('xc')).toBe(90);
});

test('returns undefined for all other invalid roman numerals', () => {
    expect(fromRoman('8989ABC')).toBe(undefined);
});