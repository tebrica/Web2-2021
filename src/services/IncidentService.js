import axiosClient from "./BaseApiService";

const ENDPOINTS = {
    INCIDENTS: '/Incidenti',
    WORK_REQUESTS: '/PlanoviRada'
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

const incidentService = {
    getIncidents,
    getWorkRequests,
}

export default incidentService;