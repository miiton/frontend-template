import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';

const appEl = document.getElementById('app')
const store = createStore(todoApp);

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    appEl
  );

render(App);

if (module.hot) module.hot.accept('./App', () => render(App));

