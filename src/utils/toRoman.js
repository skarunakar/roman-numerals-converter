const INTEGER_LIST = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const ROMAN_NUMERAL_LIST = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const findElement = integer => element => element <= integer;

function toRoman(inputToConvert) {
    let integer = parseInt(inputToConvert);
    if (integer === 0 || integer > 3999) {
        return undefined;
    }
    let computedRomanNumeral = '';
    while (integer > 0) {
        const nextHighest = INTEGER_LIST.find(findElement(integer));
        const romanNumeral = ROMAN_NUMERAL_LIST[INTEGER_LIST.indexOf(nextHighest)];
        integer -= nextHighest;
        computedRomanNumeral = computedRomanNumeral.concat(romanNumeral);
    }
    return computedRomanNumeral;
}

export default toRoman;