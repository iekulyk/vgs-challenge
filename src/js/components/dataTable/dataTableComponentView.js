import React from 'react';
import  { Table } from  'elemental';
import HeaderTableView from './dataTableHeaderView';
import DataTableRowView from './dataTableRowComponentView';


class DataTableView extends React.Component {

    constructor(){
         super();
         this.createTableRows = this.createTableRows.bind(this);
    }

    createTableRows(){
        let modalCallback = this.props.showModal;

        return this.props.incidentArray.map(function (incident) {
          return  <DataTableRowView
                  key={incident.incident_key}
                  incident_key={incident.incident_key}
                  customer={incident.customer}
                  timestamp={incident.timestamp}
                  urgency = {incident.urgency}
                  onModalCall={ modalCallback }
            />
        });
    }

    render() {
        return (
            <div className="data-table-view">
                <Table>
                    <colgroup>
                        <col width="30%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="15%" />
                        <col width="10%" />
                    </colgroup>
                    <thead>
                        <HeaderTableView/>
                    </thead>
                    <tbody>
                    { this.props.incidentArray.length > 0 ?  this.createTableRows() : null }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default DataTableView;