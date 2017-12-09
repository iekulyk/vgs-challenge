import { connect } from 'react-redux';
import MainGridView from './../components/mainGridView';
import {loadIncidents} from './../actions'

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
       loadIncidents: () => dispatch(loadIncidents())
    }
};

const MainGridContainer = connect(mapStateToProps, mapDispatchToProps)(MainGridView);

export default MainGridContainer;