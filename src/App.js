import React, { Component } from 'react';
import style from './App.module.scss';

//components
import RomanNumeralToInteger from './molecules/romanNumeralToInteger';
import IntegerToRomanNumeral from './molecules/integerToRomanNumeral';
import ConversionReferenceChart from './atoms/conversionReferenceChart';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <h1>Roman Numerals Converter</h1>
        <div className={style.converterCardContainer}>
          <div>
            <RomanNumeralToInteger />
            <IntegerToRomanNumeral />
          </div>
          <ConversionReferenceChart />
        </div>
      </div>
    );
  }
}

export default App;
