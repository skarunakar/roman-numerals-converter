import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import style from './converterCard.module.scss';

const ConverterCard = (props = {}) => {
    const { onChange } = props;

    const handleInputChange = useCallback((event = {}) => {
        const inputValue = event.target.value;
        onChange(inputValue);
    }, [onChange])

    const {
        className,
        title,
        value,
        error,
        errorClassName,
    } = props;
    return (
        <div className={`${style.cardContainer} ${className}`}>
            <div className={style.title}>{title}</div>
            <input onChange={handleInputChange}></input>
            <div className={`${style.errorText} ${errorClassName}`}>{error}</div>
            <div className={style.displaytext}>{value}</div>
        </div>
    )
}

ConverterCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.string,
};

ConverterCard.defaultProps = {
    className: '',
    title: '',
    onChange: () => { },
    value: '',
    error: '',
};
export default ConverterCard;