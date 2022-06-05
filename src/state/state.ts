import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];

export const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
