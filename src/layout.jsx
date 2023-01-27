import * as React from "react";
import TopBar from "./components/navigace/NavBar";
import PagesView from './components/content/PagesView';
import Ntbks from "./components/_unused/ntb";


function Layout() {
    return (<div>
        <TopBar />
        <div><PagesView /> </div>
    </div>)
}

export default Layout;