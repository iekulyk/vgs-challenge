import * as _  from 'lodash';
import moment from 'moment';
import { actionTypes, mocksValues } from "./constants"

export const openIncident = (incidentKey) => {
    return async (dispatch, getState) => {
        // make call here and pass to modal
        var result = {}
        
        dispatch({type: actionTypes.OPEN_INCIDENT_MODAL, incidentData: result });
    }
}

export const loadIncidents = () => {
    return async (dispatch, getState) => {
        dispatch({type: actionTypes.INCIDENT_ARRAY_UPDATED, incidents: mocksValues.mockTableRows })
    }
}