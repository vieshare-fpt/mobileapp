import AsyncStorage from '@react-native-community/async-storage';
import _create, { StateCreator, StoreApi } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import createAuthSlice, { IAuthSlice } from './createAuthSlice';

export type StoreState = IAuthSlice;
export type StoreSlice<T> = (
    set: StoreApi<StoreState>['setState'],
    get: StoreApi<StoreState>['getState'],
) => T;

const resetters: (() => void)[] = [];

const create = (<T extends unknown>(f: StateCreator<T> | undefined) => {
    if (f === undefined) return create;
    const store = _create(f);
    const initialState = store.getState();
    resetters.push(() => {
        store.setState(initialState, true);
    });
    return store;
}) as typeof _create;

export const resetAllStores = () => {
    for (const resetter of resetters) {
        resetter();
    }
};

const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            ...createAuthSlice(set, get),
        }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: state => ({
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                isAuthenticated: state.isAuthenticated,
            }), //cache state here
        },
    ),
);

export default useStore;
