import { Button } from '@blueprintjs/core';
import React from 'react';
import logo from './resources/logo.svg';
import './styles/App.css';
import TopBar from "./navigace/NavBar";
import Layout from './layout';

import { useIsSignedIn, config } from './scripts/func';
import { testMe } from './scripts/GS';
import ProvideAppContext from './Conext';

config();
//testMe();

export default function App() {
  const [isSignedIn] = useIsSignedIn();
  return (
    <div className="App">
      <ProvideAppContext >
        <TopBar />
        {isSignedIn && <Layout />}
        {!isSignedIn && <Button text=":)" />}
      </ProvideAppContext>
    </div>
  );
}
