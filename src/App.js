import logo from './resources/logo.svg';
import './style/App.css';

import { Welcome } from './components/_unused/logState';
import { Wtfe769420 } from './components/_unused/graph';
import gClient from './index'

import Layout from './layout';



function App(props) {
  return (
    <div class="App">
    <Layout gcli={props.gCli}/>
    </div>
      
    
  );
}

export default App;
