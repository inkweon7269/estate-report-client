import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '@/config';
import { getCookie } from 'cookies-next';

const userApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: configs.baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getCookie("esToken");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints(build) {
        return {
            login: build.mutation({
                query: (body) => {
                    return {
                        url: "/v1/user/login",
                        method: "POST",
                        body,
                    };
                },
            }),
            join: build.mutation({
                query: (body) => {
                    return {
                        url: "/v1/user/join",
                        method: "POST",
                        body,
                    };
                },
            }),
            profile: build.query({
                providesTags: (result, error, id) => {
                    return [{ type: "User" }];
                },
                query: () => {
                    return {
                        url: `/v1/user/profile`,
                        method: "GET",
                    };
                },
            }),
        }
    }
})

export const { useLoginMutation, useJoinMutation, useProfileQuery } = userApi;
export { userApi }