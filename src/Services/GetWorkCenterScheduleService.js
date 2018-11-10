import axios from "axios";

export const getWCSchedule = () => {
    const URL = `https://demo9906147.mockable.io/get/WCSchedule`;
    return axios.get(URL).then(res => res);
}