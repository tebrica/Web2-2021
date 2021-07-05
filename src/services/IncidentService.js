import axios from "axios";
import axiosClient from "./BaseApiService";

const ENDPOINTS = {
    INCIDENTS: '/Incidenti',
    WORK_REQUESTS: '/PlanoviRada',
    CALLS: '/Pozivi',
    EQUIPMENT : '/Oprema',
    RESOLUTIONS: '/Resolutions',
    ONE_INCIDENT: '/SingleIncident',
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

const getIncidentById = async (incidentId) => {
    const response = await axiosClient.get(ENDPOINTS.ONE_INCIDENT + `?incidentId=${incidentId}`)
    return response.data
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

const getPoziviForIncident = async (incidentId) => {
    try {
        const response = await axiosClient.get(ENDPOINTS.CALLS + `?incidentId=${incidentId}`);
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
        await axiosClient.post(ENDPOINTS.EQUIPMENT,payload)
    }
    catch(error) {
        alert('Post error! Please try again!')
        return undefined
    }
}

const getLocationCoordinates = async (payload) => {

    try {
        await axios.get("https://geocode-maps.yandex.ru/1.x/?apikey=1cdda24c-aedc-4883-8d49-60b9dec638a2&geocode=Tverskaya+6")
    }
    catch(error) {
        alert('Post error! Please try again!')
        return undefined
    }
}

const postResolution = async ({payload}) => {
    await axiosClient.post(ENDPOINTS.RESOLUTIONS, payload)
}

const postCall = async (payload) => {
    await axiosClient.post(ENDPOINTS.CALLS, payload)
}

const getCoordinatesByAddress = async(payload) => {
    const address = payload.address.replace(' ','+')
    const fullAddress = payload.number + '+' + address;
    const brt = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${fullAddress}&key=AIzaSyACJqGcEMIw0d1nGS2_rVCCMsvlQVs8gig`)
    return brt.data.results[0].geometry.location
}

const getAllOprema = async () => {
    const oprema = await axiosClient.get(ENDPOINTS.EQUIPMENT);
    return oprema.data;
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
    getLocationCoordinates,
    getPoziviForIncident,
    postCall,
    getCoordinatesByAddress,
    getAllOprema,
    getIncidentById,
}

export default incidentService;