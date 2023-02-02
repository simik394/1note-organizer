import { useEffect, useState } from 'react'
import { Button } from '@blueprintjs/core';

import {CallG} from './GS'
import { useAppContext } from './Conext';



export default function Ntbks(props) {

    const cntx = useAppContext();
    const ejj = async () => {
        
        cntx.notebooks.map((i) => console.log(i.displayName));
    }
    ejj();
    
return (<Button onClick={CallG}>callG</Button>);
}

