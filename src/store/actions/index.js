import { REGISTER } from '../../constants/action-types'

export const RegisterUser = (payload) => {
    return { type: REGISTER, payload: payload }
}