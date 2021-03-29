import React from 'react';
import style from './conversionReferenceChart.module.scss';

const ConversionReferenceChart = () => {
    return (<div className={style.tableContainer}>
        <table>
            <thead>
                <tr>
                    <th>Roman</th>
                    <th>Integer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>I</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>V</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>X</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>L</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>D</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>M</td>
                    <td>1000</td>
                </tr>
            </tbody>
        </table>
    </div>)

}
export default ConversionReferenceChart;