import * as React from "react";
import Prep from './prep'
import NtbSelect from "./ntbSelect";
import SectionSelect from './sectionSelect'

import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
} from "@blueprintjs/core";



function TopBar(){
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
    </div> )
}

export default TopBar;