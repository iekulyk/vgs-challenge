import { actionTypes } from '../constants'

const initialState = {
    modal: false,
    array: []
};

const container = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case actionTypes.INCIDENT_ARRAY_UPDATED:
        return Object.assign({}, state, { modal: false, array: action.incidents });
        case actionTypes.SHOW_CONTAINER_INFO_MODAL:
            return Object.assign({}, state, { modal: false });
        case actionTypes.CLEAR_MODAL_STATE:
            return Object.assign({}, state, { modal: false });
        case actionTypes.UNDEFINED:
            return initialState;
        default:
            return state;
    }
};

export default container;