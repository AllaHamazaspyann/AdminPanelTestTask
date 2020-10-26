import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


import reducer from './store';
import Routes from './routes';
import { composeWithDevTools } from 'redux-devtools-extension';
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
  
  , document.getElementById('root'));
