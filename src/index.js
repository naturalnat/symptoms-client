import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; //library for redux, replaces window.__redux part of code
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter as Router } from 'react-router-dom'

import "./index.css";
import App from "./App";


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
    <Router> 
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);