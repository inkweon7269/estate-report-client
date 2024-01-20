import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import configs from '@/config';
import { getCookie } from 'cookies-next';
import baseQueryWithReAuth from '@/store/apis/apiSlice';

const areaApi = createApi({
    reducerPath: 'area',
    baseQuery: baseQueryWithReAuth,
    endpoints(build) {
        return {
            fetchA1: build.query({
                query: () => {
                    return {
                        url: `/v1/area/a1`,
                        method: 'GET',
                    };
                },
            }),
            fetchA2: build.query({
                query: (a1Id) => {
                    return {
                        url: `/v1/area/a1/${a1Id}`,
                        method: 'GET',
                    };
                },
            }),
            fetchA3: build.query({
                query: (a2Id) => {
                    return {
                        url: `/v1/area/a2/${a2Id}`,
                        method: 'GET',
                    };
                },
            }),
            fetchApartLists: build.query({
                query: (a3Id) => {
                    return {
                        url: `/v1/area/a3/${a3Id}`,
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchA1Query, useFetchA2Query, useFetchA3Query, useFetchApartListsQuery } = areaApi;
export { areaApi };
