
import './style/App.css';

import {Providers, LoginType} from '@microsoft/mgt-element';
import {Msal2Provider} from '@microsoft/mgt-msal2-provider';

import { useState, createContext, useContext } from "react";

import Layout from './layout';

//const UserContext = createContext();

const logType = LoginType.Popup;
Providers.globalProvider = new Msal2Provider({ clientId: 'c25f4378-030c-4502-897b-45f3ba069317', authority: "https://login.microsoftonline.com/2b51a4b3-443f-4406-8ca4-19056a79a444",
redirectUri: "https://simik394.github.io/1note-organizer/", loginType: logType})

const provider = Providers.globalProvider;
const gClient = provider.client;

function App() {
  return (
    <div class="App">
    <Layout />
    </div>
      
    
  );
}

export default App;
