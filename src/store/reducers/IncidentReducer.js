import { DELETE_EDIT_INCIDENT, SAVE_CALLS, SAVE_DETAILS, SAVE_DEVICES, SAVE_INCIDENTS, SAVE_WORK_REQUESTS } from "../../constants/action-types"

const initialState = {
    incidents : [],
    workRequests: [],
    calls: [],
    devices: [],
    editIncident: null,
}

export default function incident(state = initialState, action) {
    switch(action.type) {
        case SAVE_INCIDENTS: {
            return { ...state, incidents: action.payload };
        }
        case SAVE_WORK_REQUESTS: {
            return { ...state, workRequests: action.payload };
        }
        case SAVE_CALLS: {
            return { ...state, calls: action.payload };
        }
        case SAVE_DEVICES: {
            return { ...state, devices: action.payload };
        }
        case SAVE_DETAILS: {
            return { ...state, editIncident: action.payload };
        }
        case DELETE_EDIT_INCIDENT: {
            return { ...state, editIncident: null }
        }
        default: {
            return {...state}
        }
    }
}