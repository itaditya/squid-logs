import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/app/store';
import App from './features/app/App';
import { appInit } from './features/app/actions';

function setupStore(bootData: any) {
  store.dispatch(appInit(bootData));
}

export function setup(bootData: any) {
  console.log('render app', bootData);
  setupStore(bootData);

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('app'),
  );
}
