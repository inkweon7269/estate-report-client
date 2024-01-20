import { apiSlice } from '@/store/apis/apiSlice';
import { logOut, setCredentials } from '@/store/slices/authSlice';

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
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(setCredentials({ ...res.data }));
                } catch (error) {
                    console.log(error);
                }
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
        logOut: builder.mutation({
            query: () => {
                return {
                    url: '/v1/user/logout',
                    method: 'POST',
                };
            },
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(logOut());

                    // resetApiState() : RTK Query 캐시 및 상태 초기화
                    dispatch(apiSlice.util.resetApiState());
                } catch (error) {
                    console.log(error);
                }
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

export const { useLoginMutation, useJoinMutation, useLogOutMutation, useProfileQuery } = userApi;
export { userApi };
