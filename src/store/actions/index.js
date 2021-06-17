import { GET_INCIDENTS, GET_WORK_REQUESTS, LOGIN, LOGOUT, REFRESH_TOKEN, REGISTER, REMOVE_CURRENT_LOGGED, SAVE_CURRENT_LOGGED, SAVE_INCIDENTS, SAVE_TOKEN, SAVE_WORK_REQUESTS } from '../../constants/action-types'

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

export const GetWorkRequests = () => {
    return { type: GET_WORK_REQUESTS }
}

export const SaveWorkRequests = (payload) => {
    return { type: SAVE_WORK_REQUESTS, payload: payload }
}

export const SaveCurrentlyLogged = (payload) => {
    return { type: SAVE_CURRENT_LOGGED, payload: payload }
}

export const RemoveCurrentlyLogged = () => {
    return { type: REMOVE_CURRENT_LOGGED }
}