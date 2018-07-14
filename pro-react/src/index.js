import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route} from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './store/store'

import './assets/css/style.css'
//02
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
