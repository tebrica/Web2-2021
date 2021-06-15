import { SAVE_TOKEN } from "../../constants/action-types"

let token = localStorage.getItem('token');

const initialState = {
    token : token === undefined ? '' : token
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        case SAVE_TOKEN: {
            console.log('BRATE')
            return { ...state, token: action.payload, };
        }
        default: {
            return {...state}
        }
    }
}