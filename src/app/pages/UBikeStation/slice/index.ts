import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UBikeStopStore, BikeStation, BikeAvailability } from './type';

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
		getBikeStation(state, action: PayloadAction<{ lat: number; lng: number; }>) {
			state.isFetching = true;
		},
		getBikeStationSuccess(state, action: PayloadAction<BikeStation[]>) {
			state.isFetching = false;
			state.bikeStation = action.payload;
		},
		getBikeStationFailed(state, action: PayloadAction<any>) {
			state.isFetching = false;
			console.warn(action.payload);
		},
		getBikeAvailability(state, action: PayloadAction<{ lat: number; lng: number; }>) {
			state.isFetching = true;
		},
		getBikeAvailabilitySuccess(state, action: PayloadAction<BikeAvailability[]>) {
			state.isFetching = false;
			state.bikeAvailability = action.payload;
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