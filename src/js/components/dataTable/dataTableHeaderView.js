import React from 'react'

class DataTableHeaderView extends React.Component {
    render() {
        return (
            <tr>
                <th>Incident Key</th>
                <th>Customer</th>
                <th>Appeared At</th>
                <th>Passed Time</th>
                <th>Info</th>
            </tr>
        )}
}

export  default  DataTableHeaderView;