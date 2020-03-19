import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let enhancer;
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware));
  } else {
    enhancer = compose(applyMiddleware(sagaMiddleware));
  }
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}