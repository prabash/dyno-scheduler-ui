import axios from "axios";

export const getWCScheduleTest = () => {
    const URL = `https://demo9906147.mockable.io/get/WCSchedule`;
    return axios.get(URL).then(res => res);
}

export const getWCSchedule = () => {
    const URL = `http://localhost:8080/api/shop-order/get`;
    return axios.get(URL).then(res => res);
}

export const addShopOrder = (shopOrder) => {
    const URL = `http://localhost:8080/api/shop-order/add-shop-order`;
    return axios.post(URL, shopOrder).then(res => res);
}

export const updateShopOrder = (shopOrder) => {
    const URL = `http://localhost:8080/api/shop-order/update-shop-order`;
    return axios.post(URL, shopOrder).then(res => res);
}

export const addShopOrderOperation = (operationDetails) => {
    const URL = `http://localhost:8080/api/shop-order/add-operation`;
    return axios.post(URL, operationDetails).then(res => res);
}

export const updateShopOrderOperation = (operationDetails) => {
    const URL = `http://localhost:8080/api/shop-order/update-operation`;
    return axios.post(URL, operationDetails).then(res => res);
}