import React, { useState, useEffect, useId } from 'react';

import { CallG } from '../scripts/GS';


/* export  function Section(sectionData){
    return (
        a
    )
} */

export  default function SectionsList(ntb){
    const [sections, setSections ] = useState();
    
    useEffect(() => {
      const graphPath = '/me/onenote/notebooks/'+ntbId+'/sections';
      CallG(graphPath);
      console.log(ntb);
      const getSections = async () => {
        const ntbId =  ntb.id;
        const graphPath = '/me/onenote/notebooks/'+ntbId+'/sections';
        const secs = await CallG(graphPath);
        return (secs);
      };
      const ls = getSections();

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

      }, [ntb]);

    return (
        <ul>{sections}</ul>
    )
}