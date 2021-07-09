import { DELETE_EDIT_INCIDENT, SAVE_CALLS, SAVE_CREWS, SAVE_DETAILS, SAVE_DEVICES, SAVE_INCIDENTS, SAVE_NOTIFICATIONS, SAVE_RESOLUTION_FOR_INCIDENT, SAVE_WORK_REQUESTS } from "../../constants/action-types"

const initialState = {
    incidents : [],
    workRequests: [],
    calls: [],
    devices: [],
    editIncident: null,
    currentResolution: null,
    Notifications: [],
    Crews: [],
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
        case SAVE_RESOLUTION_FOR_INCIDENT: {
            return { ...state, currentResolution: action.payload }
        }
        case SAVE_NOTIFICATIONS: {
            return { ...state, Notifications: action.payload }
        }
        case SAVE_CREWS: {
            return { ...state, Crews: action.payload }
        }
        default: {
            return {...state}
        }
    }
}