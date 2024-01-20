import { apiSlice } from '@/store/apis/apiSlice';

const areaApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchA1: builder.query({
            query: () => {
                return {
                    url: `/v1/area/a1`,
                    method: 'GET',
                };
            },
        }),
        fetchA2: builder.query({
            query: (a1Id) => {
                return {
                    url: `/v1/area/a1/${a1Id}`,
                    method: 'GET',
                };
            },
        }),
        fetchA3: builder.query({
            query: (a2Id) => {
                return {
                    url: `/v1/area/a2/${a2Id}`,
                    method: 'GET',
                };
            },
        }),
        fetchApartLists: builder.query({
            query: (a3Id) => {
                return {
                    url: `/v1/area/a3/${a3Id}`,
                    method: 'GET',
                };
            },
        }),
    }),
});

export const { useFetchA1Query, useFetchA2Query, useFetchA3Query, useFetchApartListsQuery } = areaApi;
export { areaApi };
