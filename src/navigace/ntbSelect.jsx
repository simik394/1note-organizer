import React, { useState, useEffect, useId } from 'react';


//const provider = Providers.globalProvider;//.graph.client;
//console.log(provider);
//const gClient = provider.client;//.api("/me").get();

export default function NtbL1(notebooks) {
    const [ntbs, setNtbs] = useState();
    const [selectedNtb, setSelectedNtb] = useState();
    const ntbSelector = useId();
    useEffect(() => {
      const ntbks = notebooks.notebooks;
  
      const test = async () => {
        await ntbks.map(i => console.log(i.displayName))
      }
      //test();
      const list = async () => {
        const li = await ntbks.map(n => <option key={n.id} value={n.displayName}>{n.displayName}</option>);
        setNtbs(li);
        console.log(li);
        console.log(ntbks);
      }
      console.log(notebooks.notebooks);
      list();
      return () => {
  
      }
    }, [notebooks]);
  
  
  
    return (
      <lable htmlFor={ntbSelector}>
        <select
          id={ntbSelector}
          title="ntbSelector"
          value={selectedNtb}
          onChange={e => setSelectedNtb(e.target.value)}>
          <option key="0" hidden="true">Choose</option>
          {ntbs}
        </select>
        <p>Your favorite fruit: {selectedNtb}</p>
      </lable>)
  }