import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore ({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;