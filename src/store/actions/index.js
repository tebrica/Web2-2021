import { LOGIN, REGISTER, SAVE_TOKEN } from '../../constants/action-types'

export const RegisterUser = (payload) => {
    return { type: REGISTER, payload: payload }
}

export const LoginUser = (payload) => {
    return { type: LOGIN, payload: payload }
}

export const SaveToken = (token) => {
    return { type: SAVE_TOKEN, payload: token }
}