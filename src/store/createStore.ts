import { createStore, applyMiddleware, compose } from 'redux';
import State from './index';
import rootSaga from '../saga';

const cs = (sagaMiddleware: any) => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = applyMiddleware(sagaMiddleware);

  const store = createStore(State, composeEnhancers(middlewares));
  sagaMiddleware.run(rootSaga);

  return store;
};

export default cs;
