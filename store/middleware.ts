import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        console.warn("middleware, We got a rejected action!");
    }
    return next(action);
};