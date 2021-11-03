import React from 'react';
import ReactDOM from 'react-dom';
import App from './features/app/App';

console.log('main loaded');

export function setup(bootData) {
  console.log('render app', bootData);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app'),
  );
}
