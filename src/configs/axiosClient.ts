import axios from 'axios'

const baseURL: string = 'https://backend-vieshare-stg.vi-vu.vn/'

const axiosClient = (token: string, refreshToken: string) => {
    const axiosClient = axios.create({
        baseURL: baseURL,
    })

    axiosClient.interceptors.request.use(async (config) => {
        if (token) {
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            config.headers.common = { Authorization: `Bearer ${token}` };
        }
        return config;
    });

    return axiosClient;
}

export default axiosClient;