import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

const baseURL: string = 'https://backend-vieshare-stg.vi-vu.vn/'

const axiosClient = (token?: string, refreshToken?: string) => {
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
    const refreshAccessToken = async (refreshToken: string) => {
        let token = null;
        await axiosClient
            .post("/auth/token", {
                refreshToken: refreshToken,
            })
            .then((response) => {
                token = response.data.token;
            })
            .catch((error) => {
                token = null;
            });
        return token;
    };
    
    return axiosClient;
}

export default axiosClient;