import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, compose,  createStore  } from 'redux';
// import { thunk } from 'redux-thunk';

import reducers from './reducers'
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


