import React from 'react';

import cl from './TableRow.module.css'

const TableRow = ({ heading, value }) => {
    return (
        <tr>
            <td>{ heading }</td>
            <td>{ value }</td>
        </tr>
    );
};

export default TableRow;