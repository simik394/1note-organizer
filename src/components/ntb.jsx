import React from 'react'





function Ntbks() {

     async function callG(){
         const provider = Providers.globalProvider;
         const gClient = provider.graph.client;
         const JsonData = await gClient.api('/me/onenote/notebooks/').get(); //.then((res) => res.json()); //.then((res) => res.json()).then((data) => console.log(data) );
         return (JsonData)
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
            <td>{info.name}</td>
            <td>{info.city}</td>
        </tr>
    )});

    return(<div>{DisplayData}</div>);
}

export default Ntbks;