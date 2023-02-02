import { useEffect, useState } from 'react'
import { Providers } from '@microsoft/mgt'
import { Button } from '@blueprintjs/core';
import {CallG} from '../GS'
//import { Notebook, PageCollection } from 'microsoft-graph';




export default function Ntbks() {

    const [notebooks, setNotebooks] = useState();
    useEffect(() => {
        const loadNotebooks = async () => {
            if (!notebooks) {
                const ntbs = await CallG();
                setNotebooks(ntbs);
            } else { console.log("uz něco je"); console.log(notebooks) }

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

    const DisplayData = ntb.map(
        (info) => {
            return (
                <>
                    <li key={info.id}>{info.displayName}</li>

                    
                </>
            )
        });

    const DD = <ul>{DisplayData}</ul>;
return (<Button onClick={CallG}>callG</Button>);


}

