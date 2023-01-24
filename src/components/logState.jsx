import { Providers, ProviderState } from '@microsoft/mgt'
import React, { useState, useEffect } from 'react';

//assuming a provider has already been initialized
/* function logState(){
    if (Providers.globalProvider.state === ProviderState.SignedIn) {
    return (<div>jj</div>);
  } else {
    return (<div>nn</div>);
  }
}
export default logState; */
/* export const logState = () => {
  /* const { instance } = useMsal();

  const handleLogin = (loginType) => {
      if (loginType === "popup") {
          instance.loginPopup(loginRequest).catch(e => {
              console.log(e);
          });
      } else if (loginType === "redirect") {
          instance.loginRedirect(loginRequest).catch(e => {
              console.log(e);
          });
      }
  } */
 
//} */
export function Welcome() {
  return (
    <div>
      <div>{Providers.globalProvider.state}</div>
      {ProviderState.Loading}
    </div>
)

}
