import { Providers, ProviderState } from '@microsoft/mgt'

//assuming a provider has already been initialized
/* function logState(){
    if (Providers.globalProvider.state === ProviderState.SignedIn) {
        return (<p>
        edited lol
      </p>);
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
  //return (
    //  <div>
      //  <h2>{Providers.globalProvider.state}</h2>
     // <//div>
  //)
//} */
export function Welcome() {
  if (Providers.globalProvider.state === ProviderState.SignedIn) {
    return (<p>
    edited lol
  </p>);
  } else {
    return (<div>nn</div>);
  }

}