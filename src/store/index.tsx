// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './metricSlice';

const store = configureStore({
    reducer: {
        metrics: metricsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;