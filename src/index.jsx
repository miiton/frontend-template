import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

const appEl = document.getElementById('app')
console.log(appEl);

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    appEl
  );

render(App);

if (module.hot) module.hot.accept('./App', () => render(App));

