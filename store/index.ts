import { boardApi } from '@/store/apis/boardApi';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '@/store/apis/userApi';
import { areaApi } from '@/store/apis/areaApi';
import { reportApi } from '@/store/apis/reportApi';

const store = configureStore({
    reducer: {
        [boardApi.reducerPath]: boardApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [areaApi.reducerPath]: areaApi.reducer,
        [reportApi.reducerPath]: reportApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ serializableCheck: false }),
        boardApi.middleware,
        userApi.middleware,
        areaApi.middleware,
        reportApi.middleware,
        // logger,
        // rtkQueryErrorLogger,
    ],
    devTools: process.env.NEXT_PUBLIC_TYPE !== "production",
});

setupListeners(store.dispatch);

export { store };
export { useFetchBoardsQuery } from '@/store/apis/boardApi';
