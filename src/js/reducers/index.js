import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import incident from './incident'

const ViewerReducer = combineReducers({
    routing: routerReducer,
    incident: incident
});

export default ViewerReducer;