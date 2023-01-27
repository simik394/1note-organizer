
import './style/App.css';

import {Providers, LoginType} from '@microsoft/mgt-element';
import {Msal2Provider} from '@microsoft/mgt-msal2-provider';

import Layout from './layout';

const logType = LoginType.Popup;
Providers.globalProvider = new Msal2Provider({ clientId: 'c25f4378-030c-4502-897b-45f3ba069317', authority: "https://login.microsoftonline.com/2b51a4b3-443f-4406-8ca4-19056a79a444",
redirectUri: "https://simik394-1noteorganizer-6nbbxea0my5.ws-eu84.gitpod.io/", loginType: logType})

const provider = Providers.globalProvider;
const gClient = provider.client;

function App(props) {
  return (
    <div class="App">
    <Layout />
    </div>
      
    
  );
}

export default App;
