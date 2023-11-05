import configs from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const boardApi = createApi({
    reducerPath: 'board',
    baseQuery: fetchBaseQuery({
        // baseUrl: configs.baseUrl,
        baseUrl: 'https://pokeapi.co',
    }),
    endpoints(build) {
        return {
            fetchBoards: build.query({
                query: (offset) => {
                    /*
                    return {
                        url: "/v1/user/profile",
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer .......`,
                        },
                    };
                    */
                    return {
                        url: `/api/v2/pokemon/?limit=20&offset=${offset}`,
                        method: 'GET',
                    };
                },
            }),
        };
    },
});
export const { useFetchBoardsQuery  } = boardApi;
export { boardApi };
