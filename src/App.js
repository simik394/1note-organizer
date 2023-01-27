import { Providers, ProviderState } from '@microsoft/mgt-element';
import React, { useState, useEffect } from 'react';
import './style/App.css';

import Layout from './layout';

import { Providers, LoginType } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

const logType = LoginType.Popup;
Providers.globalProvider = new Msal2Provider({
  clientId: 'c25f4378-030c-4502-897b-45f3ba069317', authority: "https://login.microsoftonline.com/2b51a4b3-443f-4406-8ca4-19056a79a444",
  redirectUri: "https://3000-simik394-onenoteorganiz-14lq3802evl.ws-eu84.gitpod.io/", loginType: logType
})
const provider = Providers.globalProvider;
const gClient = provider.graph.client;

const signinContext = createContext();

function useIsSignedIn(){
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.Loading);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    }
  }, []);

  return [isSignedIn];
}

function App(props) {
  const [isSignedIn] = useIsSignedIn();
  return (
    <div class="App">
      <signinContext.Provider value={gClient}>
        <Layout />
      </signinContext.Provider>
    </div>
      
    
  );
}

export default App;
