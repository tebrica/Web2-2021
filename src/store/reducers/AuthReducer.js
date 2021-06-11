import { REGISTER } from '../../constants/action-types'

const initialState = {
    token : '',
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        default: {
            return {...state}
        }
    }
}