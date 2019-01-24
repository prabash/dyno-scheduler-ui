import axios from "axios";

export const getWCScheduleTest = () => {
    const URL = `https://demo9906147.mockable.io/get/WCSchedule`;
    return axios.get(URL).then(res => res);
}

export const getWCSchedule = () => {
    const URL = `http://localhost:8080/api/shop-order/get`;
    return axios.get(URL).then(res => res);
}

export const interruptWorkCenter = () => {
    let data = { "workCenter" : "test", "interruptionStartDate" : "2018-08-09", "interruptionEndDate" : "2018-08-10",  };
    const URL = `http://localhost:8080/api/work-center/interrupt`;
    return axios.post(URL, data).then(res => res);
}