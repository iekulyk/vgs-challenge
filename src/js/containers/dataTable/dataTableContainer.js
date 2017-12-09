import { connect } from 'react-redux';
import DataTableView from '../../components/dataTable/dataTableComponentView';
import { openModal } from '../../actions'

const mapStateToProps = (state) => {
    return {
        incidentArray: state.incident.array,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       showModal: (incident_key) => dispatch(openModal(incident_key))
    }
};

const DataTableContainer = connect(mapStateToProps, mapDispatchToProps)(DataTableView);

export default DataTableContainer;