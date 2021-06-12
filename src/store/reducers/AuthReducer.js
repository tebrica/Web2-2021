import { SAVE_TOKEN } from "../../constants/action-types"

const initialState = {
    token : '',
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        case SAVE_TOKEN: {
            return { ...state, token: action.payload, };
        }
        default: {
            return {...state}
        }
    }
}