import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import configs from '@/config';
import { logOut, setCredentials } from '@/store/slices/authSlice';
import { RootState } from '@/store';
import { BaseQueryApi, BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/src/query';

const baseQuery = fetchBaseQuery({
    baseUrl: configs.baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, unknown> = async (
    args,
    api: BaseQueryApi,
    extraOptions,
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status == 401) {
        const refreshResult: any = await baseQuery('/v1/user/refresh', api, extraOptions);
        if (refreshResult?.data?.accessToken) {
            api.dispatch(setCredentials({ ...refreshResult.data }));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    } else {
        api.dispatch(logOut());
    }

    return result;
};

export default baseQueryWithReAuth;
