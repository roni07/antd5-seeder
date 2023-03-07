import axios from "axios";
import {apiUserAuth} from "../helpers/Utils";

const instance = axios.create({
    baseURL: ""
});

instance.interceptors.request.use(
    (config) => {

        if (!config.headers.Authorization) {
            config.headers = {...config.headers, ...apiUserAuth()};
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    }, // If valid response
    async (err) => {
        return Promise.reject(err);
    }
);

export default instance;
