import { apiSlice } from '@/store/apis/apiSlice';

const reportApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchReportLists: builder.query({
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
        fetchReport: builder.query({
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
        addReport: builder.mutation({
            query: (body) => {
                return {
                    url: `/v1/report`,
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: ['Report'],
        }),
        updateReport: builder.mutation({
            query: ({ id, body }) => {
                return {
                    url: `/v1/report/${id}`,
                    method: 'PUT',
                    body,
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: 'Report' }, { type: 'Report', id: arg.id }],
        }),
        deleteReport: builder.mutation({
            query: (id) => {
                return {
                    url: `/v1/report/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: ['Report'],
        }),
        addLike: builder.mutation({
            query: (body) => {
                return {
                    url: `/v1/like`,
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: 'Report' }, { type: 'Report', id: arg.id }],
        }),
        deleteLike: builder.mutation({
            query: (body) => {
                return {
                    url: `/v1/like`,
                    method: 'DELETE',
                    body,
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: 'Report' }, { type: 'Report', id: arg.id }],
        }),
    }),
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
