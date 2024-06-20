// src/store/metricsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface Metric {
    name: string;
    impressions: number;
    clicks: number;
}

interface MetricsState {
    data: Metric[];
}

const initialState: MetricsState = {
    data: [
        { name: 'Ad 1', impressions: 4000, clicks: 2400 },
        { name: 'Ad 2', impressions: 3000, clicks: 1398 },
        // Add more data as needed
    ]
};

const metricsSlice = createSlice({
    name: 'metrics',
    initialState,
    reducers: {}
});

export default metricsSlice.reducer;