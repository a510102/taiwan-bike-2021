import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import {
  getScrenicFood,
  getScrenicFoodFailed,
  getScrenicFoodSuccess,
  getScrenicSpot,
  getScrenicSpotFailed,
  getScrenicSpotSuccess,
} from '.';
import {
  fetchTourismRestaurant,
  fetchTourismScenicSpot,
  ApiResponseType,
} from '../../../Api'

function* fetchTourismScenicSpotSaga(action: PayloadAction<{lat: number; lng: number}>) {
  try {
    const { lat, lng } = action.payload;
    const response: ApiResponseType = yield call(fetchTourismScenicSpot, lat, lng);

    if (!response.status) {
      throw response.data;
    }
    yield put(getScrenicSpotSuccess(response.data));
  } catch (error) {
    yield put(getScrenicSpotFailed(error));
  }
};

function* fetchTourismRestaurantSaga(action: PayloadAction<{lat: number; lng: number}>) {
  try {
    const { lat, lng } = action.payload;
    const response: ApiResponseType = yield call(fetchTourismRestaurant, lat, lng);

    if (!response.status) {
      throw response.data;
    }
    yield put(getScrenicFoodSuccess(response.data));
  } catch (error) {
    yield put(getScrenicFoodFailed(error));
  }
};

export function* scenicSpotFoodSaga() {
  yield takeLatest(getScrenicSpot.type, fetchTourismScenicSpotSaga);
  yield takeLatest(getScrenicFood.type, fetchTourismRestaurantSaga);
};
