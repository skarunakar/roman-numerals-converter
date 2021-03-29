import { isValidRomanNumeral } from '../app.helpers';
const ROMAN_INTEGER_MAP = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

function fromRoman(inputToConvert) {
    const romanNumeral = inputToConvert.toUpperCase();
    if (!isValidRomanNumeral(romanNumeral)) {
        return undefined;
    }
    const romanNumeralSize = romanNumeral.length;
    let computedInteger = ROMAN_INTEGER_MAP[romanNumeral.charAt(0)];
    let prevComputed = computedInteger;
    for (let i = 1; i < romanNumeralSize; i++) {
        const integerEqv = ROMAN_INTEGER_MAP[romanNumeral.charAt(i)];
        if (prevComputed < integerEqv) {
            computedInteger = computedInteger - prevComputed - prevComputed;
        }
        computedInteger = computedInteger + integerEqv;
        prevComputed = integerEqv;
    }
    return computedInteger;
}

export default fromRoman;