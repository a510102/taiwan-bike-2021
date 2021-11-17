import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import globalReducer from './globalStore';
import uBikeStationReducer from '../app/pages/UBikeStation/slice';
import screnicSpotAndFoodReducer from '../app/pages/ScenicSpotANdFood/slice';
import { uBikeStationSaga } from '../app/pages/UBikeStation/slice/saga';
import { scenicSpotFoodSaga } from '../app/pages/ScenicSpotANdFood/slice/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore ({
  reducer: {
    global: globalReducer,
    bikeStation: uBikeStationReducer,
    screnicSpotAndFood: screnicSpotAndFoodReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

store.subscribe(() => {
  const allState = store.getState();
  const { position } = allState.global;
  localStorage.setItem('currentPosition', JSON.stringify(position))
});

sagaMiddleware.run(uBikeStationSaga);
sagaMiddleware.run(scenicSpotFoodSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;