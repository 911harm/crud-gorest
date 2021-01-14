import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './access/css/main.css';
import { Provider } from 'react-redux';
import store from './store'
import Axios from 'axios';
import Global from './Global'


Axios.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${Global.token}`
    return config
  });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => console.log(store.getState()))