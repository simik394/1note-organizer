import React, { useState, useEffect } from 'react';
import { Providers, ProviderState } from '@microsoft/mgt'

export function Wtfe769420() {
  const provider = Providers.globalProvider;
  const gClient = provider.graph.client;
  const onenoteSection = {
    displayName: 'Section name'
  };
  gClient.api('/me/onenote/notebooks/1-11b1f711-6f55-4109-b7dd-75b943df0eb7/sections').get();
  //console.log(usrDet)
    /* const [isSignedIn, setIsSignedIn] = useState(false);
  
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
    }, []); */
  
   return (<div>kkk</div>)
 
}
  