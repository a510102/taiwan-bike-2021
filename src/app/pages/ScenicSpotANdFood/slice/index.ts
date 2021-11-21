import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrenicSpotAndFoodStore, TourDefaultType, ScenicSpot } from './type';

const initialState: ScrenicSpotAndFoodStore = {
  scenicSpots: [],
  foods: [],
  isFetching: false,
  error: null,
  isScenicSpot: true,
  position: {
    lat: 0,
    lng: 0,
  },
};

const screnicSpotAndFoodSlice = createSlice({
  name: 'screnicSpotAndFood',
  initialState,
  reducers: {
    getScrenicSpot(state, action: PayloadAction<{ lat: number; lng: number; }>) {
      state.isFetching = true;
      state.position = action.payload;
    },
    getScrenicSpotSuccess(state, action: PayloadAction<ScenicSpot[]>) {
      state.isFetching = false;
      state.scenicSpots = action.payload;
    },
    getScrenicSpotFailed(state, action: PayloadAction<any>) {
      state.isFetching = false;
    },
    getScrenicFood(state, action: PayloadAction<{ lat: number; lng: number; }>) {
      state.isFetching = true;
    },
    getScrenicFoodSuccess(state, action: PayloadAction<TourDefaultType[]>) {
      state.isFetching = false;
      state.foods =action.payload;
    },
    getScrenicFoodFailed(state, action: PayloadAction<any>) {
      state.isFetching = false;
    },
    toggleIsScenicSpot(state) {
      state.isScenicSpot = !state.isScenicSpot;
    },
  },
});

export const {
  getScrenicFood,
  getScrenicFoodFailed,
  getScrenicFoodSuccess,
  getScrenicSpot,
  getScrenicSpotFailed,
  getScrenicSpotSuccess,
  toggleIsScenicSpot,
} = screnicSpotAndFoodSlice.actions;

export default screnicSpotAndFoodSlice.reducer;