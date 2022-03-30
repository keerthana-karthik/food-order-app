import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import itemManageReducer from './store/reducers/itemManageReducer';
import orderManageReducer from './store/reducers/orderManageReducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  itemManageReducer: itemManageReducer,
  orderManageReducer: orderManageReducer
});
const store = createStore(rootReducer);
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
