import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UBikeStopStore } from './type';

const initialState: UBikeStopStore = {
	isFetching: false,
	error: null,
	bikeAvailability: [],
	bikeStation: [],
};

const uBikeStationSlice = createSlice({
	name: 'uBikeStateion',
	initialState,
	reducers: {
		getBikeStation(state, action: PayloadAction<{ city: string; top?: string }>) {
			state.isFetching = true;
		},
		getBikeStationSuccess(state, action: PayloadAction<any>) {
			state.isFetching = false;
			console.log(action.payload);
		},
		getBikeStationFailed(state, action: PayloadAction<any>) {
			state.isFetching = false;
			console.warn(action.payload);
		},
		getBikeAvailability(state, action: PayloadAction<{ city: string; top?: string }>) {
			state.isFetching = true;
		},
		getBikeAvailabilitySuccess(state, action: PayloadAction<any>) {
			state.isFetching = false;
			console.log(action.payload);
		},
		getBikeAvailabilityFailed(state, action: PayloadAction<any>) {
			state.isFetching = false;
			console.warn(action.payload);
		},
	},
});

export const {
	getBikeAvailability,
	getBikeAvailabilityFailed,
	getBikeAvailabilitySuccess,
	getBikeStation,
	getBikeStationFailed,
	getBikeStationSuccess,
} = uBikeStationSlice.actions;

export default uBikeStationSlice.reducer;