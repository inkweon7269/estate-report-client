import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from '@/store/apis/userApi';
import { areaApi } from '@/store/apis/areaApi';
import { reportApi } from '@/store/apis/reportApi';
import { authReducer } from '@/store/slices/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [userApi.reducerPath]: userApi.reducer,
        [areaApi.reducerPath]: areaApi.reducer,
        [reportApi.reducerPath]: reportApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ serializableCheck: false }),
        userApi.middleware,
        areaApi.middleware,
        reportApi.middleware,
        // logger,
        // rtkQueryErrorLogger,
    ],
    devTools: process.env.NEXT_PUBLIC_TYPE !== 'production',
});

setupListeners(store.dispatch);

export { store };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
