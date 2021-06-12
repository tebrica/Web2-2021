import axios from 'axios'
import qs from 'qs'

const BASE_URL = 'http://localhost:8000';

const ENDPOINTS = {
    LOGIN: '/Token',
    REGISTER: '/api/Account/Register',
    REFRESH: '/token/refresh',
}

const registerNewUser = async (payload) => {
    const response = await axios.post(BASE_URL + ENDPOINTS.REGISTER, payload);
    if (response.status !== 200) {
        alert("Error while registering new user!");
    }
}

const loginUser = async (payload) => {

    const data = qs.stringify(payload);

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }

    const response = await axios.post(BASE_URL + ENDPOINTS.LOGIN,data,headers);

    if (response.status === 200) {
        localStorage.setItem('token',response.data.access_token)
        return response.data.access_token
    }
    else {
        return undefined
    }
}

const authService = {
    registerNewUser,
    loginUser,
}

export default authService;