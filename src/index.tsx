/** 
  * @desc Entry of the application
  * @author Leon Li bbddstory@live.com
  */
import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.scss';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
