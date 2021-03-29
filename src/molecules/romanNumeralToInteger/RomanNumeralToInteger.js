import React, { Component } from 'react';
import ConverterCard from '../../atoms/converterCard';

import style from './romanNumeralToInteger.module.scss'

//utils
import fromRoman from '../../utils/fromRoman';

class RomanNumeralToInteger extends Component {
    state = {
        formattedInteger: '',
        errorMessage: ''
    };

    handleChange = (romanNumeral = '') => {
        const formattedInteger = fromRoman(romanNumeral);
        if (!formattedInteger) {
            return this.setState({ errorMessage: 'Enter Valid Roman Numeral', formattedInteger: '' })
        }
        this.setState({ formattedInteger, errorMessage: '' });
    }

    render() {
        const { formattedInteger, errorMessage } = this.state;
        return (
            < ConverterCard
                title={'Roman Numeral to Integer'}
                value={formattedInteger}
                className={style.cardContainer}
                error={errorMessage}
                onChange={this.handleChange}
                errorClassName={style.errorClassName}
            />
        );
    }
}

export default RomanNumeralToInteger;