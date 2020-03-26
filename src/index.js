import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Component imports
import App from './App';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducer imports
import { fitnessReducer } from './reducers/fitnessReducer';

// The redux store
const store = createStore(fitnessReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
