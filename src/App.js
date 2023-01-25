import logo from './resources/logo.svg';
import './style/App.css';
import Prep from './components/prep'
import {Welcome} from './components/logState';
import { Wtfe769420 } from './components/graph';
import gClient from './index'
import NtbSelect from './components/ntbSelect';
import SectionSelect from './components/sectionSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Prep />
          <NtbSelect />
        </div>
        <div>
          <SectionSelect />
        </div>
      </header>
    </div>
  );
}

export default App;
