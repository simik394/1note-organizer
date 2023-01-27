import * as React from "react";
import TopBar from "./components/navigace/NavBar";
import PagesView from './components/content/PagesView';
import Ntbks from "./components/_unused/ntb";


function Layout() {
    return (<div>
        <TopBar />
        <body>
            <div><PagesView /> </div>
        </body>
    </div>)
}

export default Layout;