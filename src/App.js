import { Button } from '@blueprintjs/core';

import './style/App.css';

import TopBar from "./components/navigace/NavBar";
import Layout from './layout';

import { useIsSignedIn, config } from './func';
import { testMe } from './GS';

//const UserContext = createContext();

config();
testMe();

export default function App() {
  const [isSignedIn] = useIsSignedIn();
  return (
    <div class="App">
      <TopBar />
      {isSignedIn && <Layout />}
      {!isSignedIn && <Button text=":)" />}
    </div>
  );
}