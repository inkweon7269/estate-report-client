import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from '@/store/slices/authSlice';
import { apiSlice } from '@/store/apis/apiSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ serializableCheck: false }),
        apiSlice.middleware,
        // logger,
        // rtkQueryErrorLogger,
    ],
    devTools: process.env.NEXT_PUBLIC_TYPE !== 'production',
});

setupListeners(store.dispatch);

export { store };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
