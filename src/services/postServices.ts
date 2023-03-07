import AsyncStorage from "@react-native-community/async-storage"
import axiosClient from "./axiosClient"

export const postAPI = {
    getPost: async (params: any) => {
        try {
            const token = await AsyncStorage.getItem('token') as any
            const refreshToken = await AsyncStorage.getItem('refreshToken') as any
            const url = "/posts";
            return axiosClient(token, refreshToken).get(url, { params });
        } catch (error) {
            console.log(error);
        }
    },
    getPostDetail: async (id: string) => {
        try {
            const token = await AsyncStorage.getItem('token') as any
            const refreshToken = await AsyncStorage.getItem('refreshToken') as any
            const url = "/posts/" + id;
            return axiosClient(token, refreshToken).get(url, {});
        } catch (error) {
            console.log(error);
        }
    }
}   