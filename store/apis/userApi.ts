import { apiSlice } from '@/store/apis/apiSlice';

const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => {
                return {
                    url: '/v1/user/login',
                    method: 'POST',
                    body,
                };
            },
        }),
        join: builder.mutation({
            query: (body) => {
                return {
                    url: '/v1/user/join',
                    method: 'POST',
                    body,
                };
            },
        }),
        profile: builder.query({
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
    }),
});

export const { useLoginMutation, useJoinMutation, useProfileQuery } = userApi;
export { userApi };
