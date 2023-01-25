import logo from './resources/logo.svg';
import './style/App.css';

import { Welcome } from './components/logState';
import { Wtfe769420 } from './components/graph';
import gClient from './index'
import Prep from './components/prep'
import NtbSelect from './components/ntbSelect';
import SectionSelect from './components/sectionSelect';



function App() {
  return (
    <div class="App">
    <Prep />
    <NtbSelect />
        
    <SectionSelect />
    </div>
    
      
    
  );
}

export default App;
