import { takeLatest, call, put, ForkEffect } from 'redux-saga/effects';
import { APP_GET_FLIGHTS } from './app/app-types';
import { appSetFlights } from './app/app-actions';
import { getFlightList, INewData } from '../utils/utils';

export function* loadFlights(): Generator<ForkEffect> {
  yield takeLatest(APP_GET_FLIGHTS, loadFlightsFlow);
}

function* loadFlightsFlow() {
  const characters: INewData = yield call(getFlightList);
  yield put(appSetFlights(characters));
}
