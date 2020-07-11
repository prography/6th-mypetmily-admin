import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from 'store/createStore';

// ant 디자인 사용
import 'antd/dist/antd.css';
import { RecoilRoot } from 'recoil';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: history,
  },
});

const store = createStore(sagaMiddleware);

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
