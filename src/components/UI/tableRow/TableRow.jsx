/* eslint-disable react/prop-types */
const TableRow = ({ heading, value }) => {
    return (
        <tr>
            <td>{heading}</td>
            <td>{value}</td>
        </tr>
    )
}

export default TableRow
