import axiosClient from "./axiosClient"
import AsyncStorage from '@react-native-community/async-storage';


export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

export interface ILogin {
    email: string,
    password: string
}

export interface IRegister {
    name: string,
    dob: Date,
    gender: Gender,
    phone: string,
    email: string,
    password: string,
    avatar: string
}

export const authAPI = {
    login(payload: ILogin) {
        return axiosClient().post('/auth/login', payload)
    },
    loginByGoogle: async (credential: any) => {
        return axiosClient().post("/auth/google", credential);
    },
    logout: async () => {
        const token = await AsyncStorage.getItem('token') as any
        const refreshToken = await AsyncStorage.getItem('refreshToken') as any
        return axiosClient(token, refreshToken).post(
            "/auth/logout",
            {
                "refreshToken": refreshToken,
                "notificationToken": "string",
            },
        );
    },
    register(payload: IRegister) {
        return axiosClient().post("/users/register", payload);
    },
}