import * as React from "react";
import Prep from './Login'
import NtbSelect from "./NtbSelect";
import SectionSelect from './SectionSelect'

import {
    Button,
    Navbar,
    NavbarDivider,
    NavbarGroup,
} from "@blueprintjs/core";



function TopBar() {
    return (<div>
        <Navbar>
            <NavbarGroup>
                <Prep />
                <NavbarDivider />
                <NtbSelect />
                <NavbarDivider />
                <SectionSelect />
            </NavbarGroup>
        </Navbar>
    </div>)
}

export default TopBar;