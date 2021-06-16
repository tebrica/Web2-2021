import { SAVE_INCIDENTS } from "../../constants/action-types"

const initialState = {
    incidents : []
}

export default function incident(state = initialState, action) {
    switch(action.type) {
        case SAVE_INCIDENTS: {
            return { ...state, incidents: action.payload };
        }
        default: {
            return {...state}
        }
    }
}