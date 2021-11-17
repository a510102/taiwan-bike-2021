import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import globalReducer from './globalStore';
import uBikeStationReducer from '../app/pages/UBikeStation/slice';
import { uBikeStationSaga } from '../app/pages/UBikeStation/slice/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore ({
  reducer: {
    global: globalReducer,
    bikeStation: uBikeStationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

store.subscribe(() => {
  const allState = store.getState();
  const { position } = allState.global;
  localStorage.setItem('currentPosition', JSON.stringify(position))
});

sagaMiddleware.run(uBikeStationSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;