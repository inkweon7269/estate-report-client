import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '@/config';
import { getCookie } from 'cookies-next';
import baseQueryWithReAuth from '@/store/apis/apiSlice';

const userApi = createApi({
    reducerPath: 'user',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['User'],
    endpoints(build) {
        return {
            login: build.mutation({
                query: (body) => {
                    return {
                        url: '/v1/user/login',
                        method: 'POST',
                        body,
                    };
                },
            }),
            join: build.mutation({
                query: (body) => {
                    return {
                        url: '/v1/user/join',
                        method: 'POST',
                        body,
                    };
                },
            }),
            profile: build.query({
                providesTags: (result, error, id) => {
                    return [{ type: 'User' }];
                },
                query: () => {
                    return {
                        url: `/v1/user/profile`,
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useLoginMutation, useJoinMutation, useProfileQuery } = userApi;
export { userApi };
