import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import uiReducer, { initialState } from "./reducers/uiReducer";


const store = createStore(uiReducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
