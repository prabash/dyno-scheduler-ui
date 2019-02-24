import axios from "axios";

export const interruptWorkCenter = () => {
    let data = { "workCenter" : "test", "interruptionStartDate" : "2018-08-09", "interruptionEndDate" : "2018-08-10",  };
    const URL = `http://localhost:8080/api/work-center/interrupt`;
    return axios.post(URL, data).then(res => res);
}

export const getWCDetails = () => {
    const URL = `http://localhost:8080/api/work-center/get`;
    return axios.get(URL).then(res => res);
}