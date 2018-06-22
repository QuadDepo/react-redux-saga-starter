import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../Reducers';
import RootSaga from '../Sagas';
import logger from 'redux-logger'

const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware();
    
    return {
      ...createStore(RootReducer,
      applyMiddleware(sagaMiddleware, logger)),
      runSaga: sagaMiddleware.run(RootSaga),
    };

};

export default configureStore;
