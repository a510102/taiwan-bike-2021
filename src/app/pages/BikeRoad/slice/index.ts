import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BikeRoadStore {
	isFetching: boolean;
	error: any;
	bikeRoad: any[];
}

const initialState: BikeRoadStore = {
	bikeRoad: [],
	isFetching: false,
	error: null,
};


const bikeRoadSlice = createSlice({
	name: 'bikeRoad',
	initialState,
	reducers: {},
});

