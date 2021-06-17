import axios from 'axios'
import qs from 'qs'

const BASE_URL = 'http://localhost:8000';
const headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }

const ENDPOINTS = {
    LOGIN: '/Token',
    REGISTER: '/api/Account/Register',
    REFRESH: '/token/refresh',
    USER_INFO : '/api/UserInfo',
}

const registerNewUser = async (payload) => {
    const response = await axios.post(BASE_URL + ENDPOINTS.REGISTER, payload);
    if (response.status !== 200) {
        alert("Error while registering new user!");
    }
}

const registerUserInfo = async (payload) => {
    const response = await axios.post(BASE_URL + ENDPOINTS.USER_INFO, payload);
    if (response.status !== 201) {
        alert("Error while registering new user!");
    }
}

const loginUser = async (payload) => {
    const data = qs.stringify(payload);
    try {
        const response = await axios.post(BASE_URL + ENDPOINTS.LOGIN,data,headers);
        if (response.status === 200) {
            localStorage.setItem('token',response.data.access_token)
            return response.data.access_token
        }
    }
    catch(error) {
        alert('Login error! Please try again with a different username/password combination!')
        return undefined
    }
}

const fetchAdditionalUserData = async(username) => {
    try {
        return (await axios.get(`${BASE_URL}/${ENDPOINTS.USER_INFO}?username=${username}`)).data
    }
    catch(error) {
        alert('Login error! Please try again with a different username/password combination!')
        return undefined
    }
}

const authService = {
    registerNewUser,
    loginUser,
    registerUserInfo,
    fetchAdditionalUserData,
}

export default authService;