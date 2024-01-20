import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import configs from '@/config';
import { getCookie } from 'cookies-next';
import baseQueryWithReAuth from '@/store/apis/apiSlice';

const reportApi = createApi({
    reducerPath: 'report',
    baseQuery: baseQueryWithReAuth,
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
            addLike: build.mutation({
                query: (body) => {
                    return {
                        url: `/v1/like`,
                        method: 'POST',
                        body,
                    };
                },
                invalidatesTags: (result, error, arg) => [{ type: 'Report' }, { type: 'Report', id: arg.id }],
            }),
            deleteLike: build.mutation({
                query: (body) => {
                    return {
                        url: `/v1/like`,
                        method: 'DELETE',
                        body,
                    };
                },
                invalidatesTags: (result, error, arg) => [{ type: 'Report' }, { type: 'Report', id: arg.id }],
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

    useAddLikeMutation,
    useDeleteLikeMutation,
} = reportApi;
export { reportApi };
