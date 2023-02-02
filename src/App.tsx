import { Button } from '@blueprintjs/core';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from "./navigace/NavBar";
import Layout from './layout';

import { useIsSignedIn, config } from './func';
import { testMe } from './GS';
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
