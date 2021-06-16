import axiosClient from "./BaseApiService";

const ENDPOINTS = {
    INCIDENTS: '/Incidenti',
}

const getIncidents = async () => {
    try
    {
        const incidents = await axiosClient.get(ENDPOINTS.INCIDENTS);
        return incidents.data;
    }
    catch(error) {
        alert('Login error! Please try again with a different username/password combination!')
        return undefined
    }
}

const incidentService = {
    getIncidents,
}

export default incidentService;