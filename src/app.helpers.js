const VALID_ROMAN_NUMERAL_REGEX = '^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$';
export const isValidRomanNumeral = (romanNumeral) => romanNumeral.match(VALID_ROMAN_NUMERAL_REGEX);