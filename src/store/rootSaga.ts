import { fork, ForkEffect } from 'redux-saga/effects';
import { loadFlights } from './loadFlightListSaga';

export function* rootSaga(): Generator<ForkEffect> {
  yield fork(loadFlights);
}
