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

function* fetchBikeStationSaga(action: PayloadAction<{ city: string; top?: string; }>) {
	try {
		const { city, top } = action.payload;
		const response: ApiResponseType = yield call(fetchBikeStation, city, top);
		if (!response.success) {
			throw response.data;
		}

		yield put(getBikeStationSuccess(response.data));
	} catch (error) {
		yield put(getBikeStationFailed(error))
	}
};

function* fetchBikeAvailabilitySaga(action: PayloadAction<{ city: string; top?: string; }>) {
	try {
		const { city, top } = action.payload;
		const response: ApiResponseType = yield call(fetchBikeAvailability, city, top);
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