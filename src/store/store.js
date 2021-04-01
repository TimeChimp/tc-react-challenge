import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';

const composeEnhancers = composeWithDevTools({
  name: 'Website',
  trace: true,
  traceLimit: 20,
});


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
