import { Login } from '@microsoft/mgt-react';
import { Button, Navbar, NavbarDivider } from "@blueprintjs/core";
import NtbSelect from './NtbSelect';

 function Prep(){
    const vari = 0;
    if (vari===1){return ("nav")}else{
        return(
            <div><Login /></div>
        )
    }
    
}
export default Prep;