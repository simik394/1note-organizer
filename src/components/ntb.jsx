import { useEffect, useState } from 'react'
import { Button } from '@blueprintjs/core';

import {CallG} from '../GS'
import { useAppContext } from '../Conext';

export default function Ntbks(props) {

    /* const [notebooks, setNotebooks] = useState();
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
    }); */

    const cntx = useAppContext();
    console.log(cntx);
    const ntbs = cntx.notebooks;
    //console.log(ntbs);
    //const ntb0 = ntbs[0];
return (<Button onClick={CallG}>callG</Button>);
}