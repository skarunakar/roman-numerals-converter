import React, { Component } from 'react';
import ConverterCard from '../../atoms/converterCard';

import style from './integerToRomanNumeral.module.scss'

//utils
import toRoman from '../../utils/toRoman';

class IntegerToRomanNumeral extends Component {
    state = {
        formattedRomanNumeral: '',
        errorMessage: ''
    };

    handleChange = (inputValue) => {
        const formattedRomanNumeral = toRoman(inputValue);
        if (!formattedRomanNumeral && inputValue) {
            return this.setState({ errorMessage: 'Enter Number between 0 and 3999', formattedRomanNumeral: '' })
        }
        this.setState({ formattedRomanNumeral, errorMessage: '' });
    }

    render() {
        const { formattedRomanNumeral, errorMessage } = this.state;
        return (
            < ConverterCard
                title={'Integer to Roman Numeral'}
                value={formattedRomanNumeral}
                onChange={this.handleChange}
                error={errorMessage}
                className={style.cardContainer}
                errorClassName={style.errorClassName}
            />
        );
    }
}

export default IntegerToRomanNumeral;