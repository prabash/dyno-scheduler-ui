import axios from "axios";

export const interruptWorkCenter = (interruptData) => {
    const URL = `http://localhost:8080/api/work-center/interrupt`;
    return axios.post(URL, interruptData).then(res => res);
}

export const getWCDetails = () => {
    const URL = `http://localhost:8080/api/work-center/get`;
    return axios.get(URL).then(res => res);
}