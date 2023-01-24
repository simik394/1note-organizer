import logo from './logo.svg';
import './App.css';
import { Login } from '@microsoft/mgt-react';
import {Welcome} from './logState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          edited lol
        </p>
        <div>
          <Welcome/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login />
      </header>
    </div>
  );
}

export default App;
