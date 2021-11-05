import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IdProvider } from '@radix-ui/react-id';
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
          <IdProvider>
            <App />
          </IdProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root-main'),
  );
}
