// Entry point
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore';

const store = configureStore({});
const mountApp = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>, mountApp)
registerServiceWorker();
