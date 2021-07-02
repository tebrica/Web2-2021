import axiosClient from "./BaseApiService";

const ENDPOINTS = {
    INCIDENTS: '/Incidenti',
    WORK_REQUESTS: '/PlanoviRada',
    CALLS: '/Pozivi',
    EQUIPMENT : '/Oprema',
    RESOLUTIONS: '/Resolutions'
}

const getIncidents = async () => {
    try {
        const incidents = await axiosClient.get(ENDPOINTS.INCIDENTS);
        return incidents.data;
    }
    catch(error) {
        alert('Fetch error! Please try again!')
        return undefined
    }
}

const getMyIncidents = async (username) => {
    try {
        const incidents = await axiosClient.get(ENDPOINTS.INCIDENTS + `?username=${username}`);
        return incidents.data;
    }
    catch(error) {
        alert('Fetch error! Please try again!')
        return undefined
    }
}

const addNewIncident = async(payload) => {
    try {
        await axiosClient.post(ENDPOINTS.INCIDENTS, payload)
    }
    catch(error) {
        alert('Fetch error! Please try again!')
        return undefined
    }
}

const getWorkRequests = async () => {
    try {
        const response = await axiosClient.get(ENDPOINTS.WORK_REQUESTS);
        return response.data;
    }
    catch(error) {
        alert('Fetch error! Please try again!')
        return undefined
    }
}

const getPozivi = async () => {
    try {
        const response = await axiosClient.get(ENDPOINTS.CALLS);
        return response.data
    }
    catch(error) {
        alert('Fetch error! Please try again!')
        return undefined
    }
}

const getOprema = async (payload) => {
    try {
        const response = await axiosClient.get(ENDPOINTS.EQUIPMENT + `?incId=${payload}`);
        return response.data
    }
    catch(error) {
        alert('Fetch error! Please try again!')
        return undefined
    }
}

const postOprema = async (payload) => {
    try {
        await axiosClient.post(ENDPOINTS.EQUIPMENT,payload.payload)
    }
    catch(error) {
        alert('Post error! Please try again!')
        return undefined
    }
}

const postResolution = async ({payload}) => {
    await axiosClient.post(ENDPOINTS.RESOLUTIONS, payload)
}

const incidentService = {
    getIncidents,
    getWorkRequests,
    getPozivi,
    getMyIncidents,
    addNewIncident,
    getOprema,
    postOprema,
    postResolution,
}

export default incidentService;