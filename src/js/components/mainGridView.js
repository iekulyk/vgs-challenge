import React from 'react';
import DataTableContainer from '../containers/dataTable/dataTableContainer';
import HeadeView from '../components/headerView'

class MainGridView extends React.Component {

    componentDidMount () {
        this.props.loadIncidents()
    }

    render() {
        return (
            <div className="grid-view">
                <HeadeView/>
                <DataTableContainer/>
            </div>
        );
    }
}

export default MainGridView;