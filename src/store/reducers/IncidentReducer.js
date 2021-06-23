import { SAVE_CALLS, SAVE_DEVICES, SAVE_INCIDENTS, SAVE_WORK_REQUESTS } from "../../constants/action-types"

const initialState = {
    incidents : [],
    workRequests: [],
    calls: [],
    devices: [],
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
        default: {
            return {...state}
        }
    }
}