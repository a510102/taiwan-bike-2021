import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BikeRoadStore, BikeRoadType } from './type';

const initialState: BikeRoadStore = {
	bikeRoad: [],
	isFetching: false,
	error: null,
	city: '',
};


const bikeRoadSlice = createSlice({
	name: 'bikeRoad',
	initialState,
	reducers: {
		changeCity(state, action: PayloadAction<{ city: string }>) {
			const { city } = action.payload;
			state.city = city;
		},
		getBikeRoad(state, action: PayloadAction<{ city: string }>) {
			state.isFetching = true;
		},
		getBikeRoadSuccess(state, action: PayloadAction<BikeRoadType[]>) {
			state.isFetching = false;
			state.bikeRoad = action.payload;
		},
		getBikeRoadFailed(state, action: PayloadAction<any>) {
			state.isFetching = false;
			console.warn(action.payload);
		},
	},
});

export const {
	getBikeRoad,
	getBikeRoadFailed,
	getBikeRoadSuccess,
	changeCity,
} = bikeRoadSlice.actions;

export default bikeRoadSlice.reducer;
