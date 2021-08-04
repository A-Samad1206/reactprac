import root from '../reducers';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    root,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga);
  store.dispatch({ type: 'Hello' });
  return store;
};
export default configureStore;
