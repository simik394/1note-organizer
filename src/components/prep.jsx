import { Login } from '@microsoft/mgt-react';

export function Prep(){
    const vari = 1;
    if (vari===1){return (<h2>no nic</h2>)}else{
        return(
            <div><Login /></div>
        )
    }
    
}