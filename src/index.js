import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from './utils/constants';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import "tachyons"
const reach = loadStdlib('ALGO');
reach.setProviderByName(Provider.TEST_NET)


ReactDOM.render(
  <React.StrictMode>
    <App reach={reach} backend={backend} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
