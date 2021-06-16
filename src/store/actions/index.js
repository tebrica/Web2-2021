import { GET_INCIDENTS, LOGIN, LOGOUT, REFRESH_TOKEN, REGISTER, SAVE_INCIDENTS, SAVE_TOKEN } from '../../constants/action-types'

export const RegisterUser = (payload) => {
    return { type: REGISTER, payload: payload }
}

export const LoginUser = (payload) => {
    return { type: LOGIN, payload: payload }
}

export const SaveToken = (token) => {
    return { type: SAVE_TOKEN, payload: token }
}

export const LogoutUser = () => {
    return { type: LOGOUT }
}

export const RefreshToken = () => {
    return { type: REFRESH_TOKEN }
}

export const GetIncidents = () => {
    return { type: GET_INCIDENTS }
}

export const SaveIncidentsToBase = (payload) => {
    return { type: SAVE_INCIDENTS, payload: payload}
}