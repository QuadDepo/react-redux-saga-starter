import { fork, all } from 'redux-saga/effects';

// ## IMPORT ALL WATCHERS
import sagaWatcher from './Saga/watcher';

// # Export Start Watcher
export default function* startForman() {
  yield all([
    fork(sagaWatcher),
  ])
}
