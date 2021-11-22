import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchCyclingShape,ApiResponseType } from '../../../Api';
import {
  getBikeRoad,
  getBikeRoadFailed,
  getBikeRoadSuccess
} from '.';

function* fetchCyclingShapeSaga(action: PayloadAction<{ city: string }>) {
  try {
    const { city } = action.payload;
    const response: ApiResponseType = yield call(fetchCyclingShape, city);
    if (!response.status) {
      throw response.data;
    }

    yield put(getBikeRoadSuccess(response.data));
  } catch (error) {
    yield put(getBikeRoadFailed(error));
  }
};

export function* bikeRoadSaga() {
  yield takeLatest(getBikeRoad.type, fetchCyclingShapeSaga);
};
