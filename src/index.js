import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Providers, LoginType} from '@microsoft/mgt-element';
import {Msal2Provider} from '@microsoft/mgt-msal2-provider';

Providers.globalProvider = new Msal2Provider({ clientId: 'c25f4378-030c-4502-897b-45f3ba069317', authority: "https://login.microsoftonline.com/2b51a4b3-443f-4406-8ca4-19056a79a444",
redirectUri: "https://3000-simik394-onenoteorganiz-j5knvh6w7bi.ws-eu83.gitpod.io", LoginType: "popup"})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
