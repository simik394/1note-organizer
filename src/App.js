import logo from './resources/logo.svg';
import './style/App.css';
import Prep from './components/prep'
import {Welcome} from './components/logState';
import { Wtfe769420 } from './components/graph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          edited lol
        </p>
        <div>
          <Welcome />
        </div>
        <div>
        <Wtfe769420 />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Prep />
      </header>
    </div>
  );
}

export default App;
