import { StoreSlice } from './index';

export interface IAuthSlice {
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
}

const createAuthSlice: StoreSlice<IAuthSlice> = (set, _get) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  setAuthInfo: (authInfo: any | null) => {
    set(convertAuthInfo(authInfo));
  },
  resetAuthInfo: () => set({
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  }),
});

export const convertAuthInfo = (authInfo: any | null) => ({
  accessToken: authInfo?.access_token,
  refreshToken: authInfo?.refresh_token,
  isAuthenticated: true,
});

export default createAuthSlice;
