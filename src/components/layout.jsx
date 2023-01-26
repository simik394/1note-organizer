import * as React from "react";
import TopBar from "./NavBar";
import PagesView from './PagesView';


function Layout() {
    return (<div>
            <header>
                <TopBar />
            </header>
            <body>
                <div><PagesView /> </div>
            </body>
            </div>)
}

export default Layout;