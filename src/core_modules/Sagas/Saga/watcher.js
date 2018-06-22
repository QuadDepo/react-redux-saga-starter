import { takeLatest } from 'redux-saga/effects';

// # Import all Sagas from Routes/index.js
import {
  Saga
  } from './index';

// # Import all Consts from Routes
import * as types from '../../Const';

// # Export Route Watcher
export default function* SagaWatcher() {
  yield takeLatest(types.CONST, Saga);
}
