import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const baseURL: string = 'https://backend-vieshare-stg.vi-vu.vn/'

const axiosClient = axios.create({
    baseURL: baseURL,

})

axiosClient.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("token")
    if (token) {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        config.headers.common = { Authorization: `Bearer ${token}` };
    }
    return config;
});

const refreshAuthLogic = async (failedRequest: any) => {
    const accessToken = useStore.getState().accessToken;
    const refreshToken = useStore.getState().refreshToken;
    const setUserData = useStore.getState().setUserData;
    const resetAuthInfo = useStore.getState().resetAuthInfo;
    if (refreshToken && accessToken) {
        try {
            const newAuthData = await refreshAuthToken(accessToken, refreshToken);
            if (newAuthData) {
                failedRequest.response.config.headers['Authorization'] =
                    'Bearer ' + newAuthData.access_token;
                useStore.getState().setAuthInfo(newAuthData);

                return Promise.resolve();
            }
            return Promise.reject();
        } catch (error) {
            return Promise.reject();
        }
    } else {
        Alert.alert('You are logged out', 'There was an unknown error occurred, please login again.');
        setUserData(null);
        resetAuthInfo();
        resetAllStores();
    }
};


// Instantiate the interceptor
createAuthRefreshInterceptor(axiosClient, refreshAuthLogic, {
    statusCodes: [401, 403], // default: [ 401 ]
});

export default axiosClient;