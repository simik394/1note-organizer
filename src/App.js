
import './style/App.css';
import TopBar from "./components/navigace/NavBar";

import {Providers, LoginType, ProviderState} from '@microsoft/mgt-element';
import {Msal2Provider} from '@microsoft/mgt-msal2-provider';


import React, { useState, useEffect } from 'react';

import Layout from './layout';
import { Button } from '@blueprintjs/core';

function useIsSignedIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    }
  }, []);

  return [isSignedIn];
}

//const UserContext = createContext();

const logType = LoginType.Popup;
Providers.globalProvider = new Msal2Provider({ clientId: 'c25f4378-030c-4502-897b-45f3ba069317', authority: "https://login.microsoftonline.com/2b51a4b3-443f-4406-8ca4-19056a79a444",
redirectUri: "http://localhost:3000", loginType: logType})

const provider = Providers.globalProvider;
console.log(provider);
const gClient = provider.graph.client.api("/me").get();
console.log(gClient);

export default function App() {
  const [isSignedIn] = useIsSignedIn();
  return (
    <div class="App">
      <TopBar />
    {isSignedIn && <Layout />}
    {!isSignedIn && <Button text=":)"/>}
    </div>
    
    
  );
}


