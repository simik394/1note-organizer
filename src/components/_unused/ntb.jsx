import React from 'react'
import { Providers, ProviderState } from '@microsoft/mgt-element'
import { Button } from '@blueprintjs/core';





function Ntbks() {
     async function callG(){
         const provider = Providers.globalProvider;
         const gClient = provider.graph.client;
         const JsonData = await gClient.api('/me/onenote/notebooks/').get()
         .then((res) => res.value);
         console.log(JsonData);
         JsonData.map((a) => console.log(a.displayName) );//.then((res) => res.json()).then((data) => console.log(data) );
         const notebooks = JsonData.map(
            (data) => <button  text={data.id}/>);
        //const Notebooklist = <div>{notebooks}</div>
        console.log(notebooks)
         return (notebooks)
     }
     
    const ntb = [{
        "id":8,
        "name":"Parul",
        "city":"Chandigarh"
    },
    
    {
        "id":9,
        "name":"Himani",
        "city":"Dehradun"
    }];

    const DisplayData=ntb.map(
        (info)=>{return ( <tr>
            <td>{info.id}</td>
            <td>{info.displayName}</td>
            <td>{info.city}</td>
            <Button onClick={callG()}>callG</Button>
            
        </tr>
    )});
    
    
    return(<div>{DisplayData}</div>);
}

export default Ntbks;