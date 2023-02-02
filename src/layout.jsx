import * as React from "react";

import PagesView from './content/PagesView';
import TopBar from "./navigace/NavBar";


function Layout() {
    return (
        <>
            <TopBar />
            <div><PagesView /> </div>
        </>)
}

export default Layout;