import { Providers, LoginType, ProviderState } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';


import { useState, useEffect } from 'react';


export function config() {
    const logType = LoginType.Popup;
    Providers.globalProvider = new Msal2Provider({
        clientId: 'c25f4378-030c-4502-897b-45f3ba069317',
        authority: "https://login.microsoftonline.com/2b51a4b3-443f-4406-8ca4-19056a79a444",
        redirectUri: "https://3000-simik394-1noteorganizer-2328c2nqfho.ws-eu85.gitpod.io/1note-organizer",
        loginType: logType
    });

}


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