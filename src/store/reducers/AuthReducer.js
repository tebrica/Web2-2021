import { REMOVE_CURRENT_LOGGED, SAVE_CURRENT_LOGGED, SAVE_TOKEN } from "../../constants/action-types"

let token = localStorage.getItem('token');

const initialState = {
    token : token === undefined ? '' : token,
    currentlyLogged : null,
}

export default function auth(state = initialState, action) {
    switch(action.type) {

        case SAVE_TOKEN: {
            return { ...state, token: action.payload, };
        }
        case SAVE_CURRENT_LOGGED: {
            return { ...state, currentlyLogged: action.payload }
        }
        case REMOVE_CURRENT_LOGGED: {
            return { ...state, currentlyLogged: null }
        }
        default: {
            return {...state}
        }
        
    }
}