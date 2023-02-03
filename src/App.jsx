import './styles/App.css';

import Layout from './layout';
import {ProvideAppContext, ProvideNtbContext} from './Conext';
import {config } from './scripts/func';
import { testMe } from './scripts/GS';


config();
//testMe();

export default function App() {
 
  return (
    <div className="App">
      <ProvideAppContext> 
        <ProvideNtbContext>
        <Layout />
        </ProvideNtbContext>
      </ProvideAppContext>
    </div>
  );
}
