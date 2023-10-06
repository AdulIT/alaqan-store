import React from 'react';

import cl from './Table.module.css'

const Table = ({ children }) => {

    return (
        <table border="0">
            <tbody>
                { children }
            </tbody>
        </table>
    );
};

export default Table;