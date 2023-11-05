import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import configs from '@/config';
import { getCookie } from 'cookies-next';

const reportApi = createApi({
    reducerPath: 'report',
    baseQuery: fetchBaseQuery({
        baseUrl: configs.baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getCookie('esToken');
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Report'],
    endpoints(build) {
        return {
            fetchReportLists: build.query({
                query: (params) => {
                    return {
                        url: `/v1/report`,
                        method: 'GET',
                        params,
                    };
                },
                providesTags: (result, error, id) => {
                    return result
                        ? [...result.list.map(({ id }: { id: number }) => ({ type: 'Report' as const, id })), 'Report']
                        : ['Report'];
                },
            }),
            fetchReport: build.query({
                query: (id) => {
                    return {
                        url: `/v1/report/${id}`,
                        method: 'GET',
                    };
                },
                providesTags: (result, error, id) => {
                    return [{ type: 'Report', id }];
                },
            }),
            addReport: build.mutation({
                query: (body) => {
                    return {
                        url: `/v1/report`,
                        method: 'POST',
                        body,
                    };
                },
                invalidatesTags: ['Report'],
            }),
            updateReport: build.mutation({
                query: ({ id, body }) => {
                    return {
                        url: `/v1/report/${id}`,
                        method: 'PUT',
                        body,
                    };
                },
                invalidatesTags: (result, error, arg) => [{ type: 'Report' }, { type: 'Report', id: arg.id }],
            }),
            deleteReport: build.mutation({
                query: (id) => {
                    return {
                        url: `/v1/report/${id}`,
                        method: 'DELETE',
                    };
                },
                invalidatesTags: ['Report'],
            }),
        };
    },
});

export const {
    useFetchReportListsQuery,
    useFetchReportQuery,
    useAddReportMutation,
    useUpdateReportMutation,
    useDeleteReportMutation,
} = reportApi;
export { reportApi };
