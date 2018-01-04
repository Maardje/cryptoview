import React, { Component } from 'react';

// typescript mis ik nu 

/* 
    interface TableProps {
        columnNames: string[];
        values: object[]
    }
*/

const columnNames = ['Coin', 'Amount', 'Buy', 'Worth', 'Gain/Loss'];
const values = [
    {
        'Coin': 'XRP',
        'Amount': '2000',
        'Buy': '0.20',
        'Worth': '2',
        'Gain/Loss': 'alotta'
    },
    {
        'Coin': 'XVG',
        'Amount': '15000',
        'Buy': '0.0048',
        'Worth': '0.13',
        'Gain/Loss': '100miljoen'
    }

];


export default class Table extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {
                                columnNames.map(columnName => <th>{columnName}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                Object.values(values[0]).map(item => <td>{item}</td>)
                            }
                        </tr>
                        <tr>
                            {
                                Object.values(values[1]).map(item => <td>{item}</td>)
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
