import axios from "axios";

export const getWCScheduleTest = () => {
    const URL = `https://demo9906147.mockable.io/get/WCSchedule`;
    return axios.get(URL).then(res => res);
}

export const getWCSchedule = () => {
    const URL = `http://localhost:8080/api/shop-order/get`;
    return axios.get(URL).then(res => res);
}