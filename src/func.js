import {Providers, LoginType, ProviderState} from '@microsoft/mgt-element';
import {Msal2Provider} from '@microsoft/mgt-msal2-provider';


import React, { useState, useEffect } from 'react';


export function useIsSignedIn() {
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