// Startup point for the client-side

import React from 'react';
import ReactDOM from 'react-dom';

//import Home from './component/Home';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Providers store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Providers>,
  document.querySelector('#root')
);
