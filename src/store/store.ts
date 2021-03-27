import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './app/app-reducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
