import * as React from "react";
import TopBar from "./components/navigace/NavBar";
import PagesView from './components/content/PagesView';
import Ntbks from "./components/ntb";


function Layout() {
    return (<div>
        
        <div><PagesView /> </div>
    </div>)
}

export default Layout;