import { useEffect, useState } from 'react'
import { Providers, ProviderState } from '@microsoft/mgt'
import { Button } from '@blueprintjs/core';
//import { Notebook, PageCollection } from 'microsoft-graph';

async function callG() {
    const provider = Providers.globalProvider;
    console.log(provider);
    const gClient = provider.graph.client;
    console.log(gClient);
    //const JsonData = await gClient.api('/me/onenote/notebooks/').get()
    //    .then((res) => res.value);
    //console.log(JsonData);
    //JsonData.map((a) => console.log(a.displayName));//.then((res) => res.json()).then((data) => console.log(data) );
    //const notebooks = JsonData.map(
    //    (data) => <button text={data.id} />);
    //const Notebooklist = <div>{notebooks}</div>
    //console.log(notebooks);
    //return (JsonData)
    const graphPath = '/me/onenote/notebooks/';
    var response = await gClient.api(graphPath).get();
    //var pagec = response.value;
    console.log(response.value);
    return (response.value);
}


function Ntbks() {

    const [notebooks, setNotebooks] = useState();
    useEffect(() => {
        const loadNotebooks = async () => {
            if (!notebooks){
                const ntbs = await callG();
                setNotebooks(ntbs);
            } else {console.log("uz něco je");console.log(notebooks)}
        
        };
        //console.log("1 - "+notebooks);
        loadNotebooks();
        //console.log("2 - "+notebooks);
    });

    const ntb = [{
        "id": 8,
        "name": "nn",
        "city": "111"
    },

    {
        "id": 9,
        "name": "jj",
        "city": "222"
    }];

    const DisplayData = notebooks.map(
        (info) => {
            return (<tr>
                
                <td key={info.id}>{info.displayName}</td>
                
                <Button onClick={callG}>callG</Button>

            </tr>
            )
        });


    return (<div>{DisplayData}</div>);
}

export default Ntbks;