import { ADD_CALL, ADD_DEVICE, ADD_INCIDENT, ADD_RESOLUTION, APPROVE_USER, CHANGE_PASSWORD, GET_CALLS, GET_COORDINATES, GET_DEVICES, GET_INCIDENTS, GET_UNAPPROVED_USERS, GET_WORK_REQUESTS, LOGIN, LOGOUT, REFRESH_TOKEN, REGISTER, REMOVE_CURRENT_LOGGED, SAVE_CALLS, SAVE_CURRENT_LOGGED, SAVE_DEVICES, SAVE_INCIDENTS, SAVE_TOKEN, SAVE_UNAPPROVED_USERS, SAVE_WORK_REQUESTS } from '../../constants/action-types'

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

export const GetIncidents = (gettype) => {
    return { type: GET_INCIDENTS, payload: gettype }
}

export const SaveIncidentsToBase = (payload) => {
    return { type: SAVE_INCIDENTS, payload: payload}
}

export const AddNewIncident = (payload) => {
    return { type: ADD_INCIDENT, payload: payload }
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

export const GetCalls = (incId) => {
    return { type: GET_CALLS, incident: incId }
}

export const SaveCalls = (payload) => {
    return { type: SAVE_CALLS, payload: payload }
}

export const AddCall = (payload) => {
    return { type: ADD_CALL, payload: payload }
}

export const GetUnapprovedUsers = () => {
    return { type: GET_UNAPPROVED_USERS }
}

export const SaveUnapprovedUsers = (payload) => {
    return { type: SAVE_UNAPPROVED_USERS, payload: payload }
}

export const ApproveUser = (payload) => {
    return { type: APPROVE_USER, payload: payload }
}

export const GetDevices = (payload) => {
    return { type: GET_DEVICES, payload: payload }
}

export const SaveDevices = (payload) => {
    return { type: SAVE_DEVICES, payload: payload }
}

export const AddNewDevice = (payload) => {
    return { type: ADD_DEVICE, payload: payload }
}

export const AddNewResolution = (payload) => {
    return { type: ADD_RESOLUTION, payload: payload }
}

export const GetCoordinates = (payload) => {
    return { type: GET_COORDINATES, payload: payload }
}

export const ChangePassword = (payload) => {
    return { type: CHANGE_PASSWORD, payload: payload }
}