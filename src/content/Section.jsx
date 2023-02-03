import React, { useState, useEffect, useId } from 'react';

import { CallG } from './scripts/GS';


export  function Section(sectionData){
    return (
        a
    )
}

export  default function SectionsList(ntb){
    const [sections, setSections ] = useState();
    
    useEffect(() => {
        const graphPath = '/me/onenote/notebooks/'+ntb.ntb.id+'/sections';
        const ls = CallG(graphPath);

        const test = async () => {
          await ls.map(i => console.log(i.displayName))
        }
        //test();
        const listOut = async () => {
          const lis = await ls.map(n =>
            <li
              key={n.displayName}
              value={n.displayName}
            >
              {n.displayName}
            </li>);
          setSections(lis);
          //cntx.setSelectedNtb(li);
          console.log(lis);
          //console.log(ntbks);
        }
        //console.log(notebooks.notebooks);
        listOut();
        return () => {}
      }, [ntb]);

    return (
        <ul>{sections}</ul>
    )
}