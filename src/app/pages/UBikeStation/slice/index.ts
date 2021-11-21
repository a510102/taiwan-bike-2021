import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UBikeStopStore, BikeStation, BikeAvailability } from './type';

const initialState: UBikeStopStore = {
	isFetching: false,
	error: null,
	bikeAvailability: [],
	bikeStation: [],
	postion: {
		lat: 0,
		lng: 0,
	},
	filterPosition: undefined,
};

const uBikeStationSlice = createSlice({
	name: 'uBikeStateion',
	initialState,
	reducers: {
		getBikeStation(state, action: PayloadAction<{ lat: number; lng: number; }>) {
			const { lat, lng } = action.payload;
			if (state.postion.lat !== lat || state.postion.lng !== lng) {
				state.bikeStation = [];
				state.bikeAvailability = [];
				state.postion.lng = lng;
				state.postion.lat = lat;
			}
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
		setFilterPostion(state, action: PayloadAction<{ lat: number; lng: number }>) {
			const { lat, lng } = action.payload;
			state.filterPosition = { lat, lng };
		},
		resetFilterPostion(state) {
			state.filterPosition = undefined;
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
	setFilterPostion,
	resetFilterPostion,
} = uBikeStationSlice.actions;

export default uBikeStationSlice.reducer;