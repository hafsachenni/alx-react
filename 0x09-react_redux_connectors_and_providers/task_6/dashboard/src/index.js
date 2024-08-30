import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer, { initiallState } from "./reducers/rootReducer";

const reduxExtns = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(rootReducer), initiallState, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
