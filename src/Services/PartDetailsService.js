import axios from "axios";

export const getPartDetails = () => {
    const URL = `http://localhost:8080/api/part-details/get`;
    return axios.get(URL).then(res => res);
}