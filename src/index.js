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
reach.setProviderByName(Provider.MAIN_NET);


ReactDOM.render(
  <React.StrictMode>
    <App reach={reach} backend={backend} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
