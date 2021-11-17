import { put, call, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import {
	fetchBikeAvailability,
	fetchBikeStation,
	ApiResponseType,
} from '../../../Api';
import {
	getBikeAvailability,
	getBikeAvailabilityFailed,
	getBikeAvailabilitySuccess,
	getBikeStation,
	getBikeStationFailed,
	getBikeStationSuccess,
} from '.';

function* fetchBikeStationSaga(action: PayloadAction<{ lat: number; lng: number; }>) {
	try {
		const { lat, lng } = action.payload;
		const response: ApiResponseType = yield call(fetchBikeStation, lat, lng);
		if (!response.success) {
			throw response.data;
		}

		yield put(getBikeStationSuccess(response.data));
	} catch (error) {
		yield put(getBikeStationFailed(error))
	}
};

function* fetchBikeAvailabilitySaga(action: PayloadAction<{ lat: number; lng: number; }>) {
	try {
		const { lat, lng } = action.payload;
		const response: ApiResponseType = yield call(fetchBikeAvailability, lat, lng);
		if (!response.success) {
			throw response.data;
		}

		yield put(getBikeAvailabilitySuccess(response.data));
	} catch (error) {
		yield put(getBikeAvailabilityFailed(error))
	}
};


export function* uBikeStationSaga() {
	yield takeLatest(getBikeStation.type, fetchBikeStationSaga);
	yield takeLatest(getBikeAvailability.type, fetchBikeAvailabilitySaga);
}