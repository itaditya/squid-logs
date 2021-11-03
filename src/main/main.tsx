import React from 'react';
import ReactDOM from 'react-dom';
import App from './features/app/App';
import { delaysForDebug } from '../shared/config';

const appDelay = delaysForDebug.app;

function renderApp() {
  console.log('render app');
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app'),
  );
}

if (appDelay) {
  setTimeout(() => {
    renderApp();
  }, appDelay);
} else {
  renderApp();
}
