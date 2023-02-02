import { useState, useEffect, useId } from "react";

import Ntbks from "../ntb";

import { useAppContext } from '../Conext';

function PagesView() {
  const cntx = useAppContext();
  const ntbs = cntx.notebooks;
  return (
    <div>
      <p>pagesView</p>
      <Ntbks />
      <NtbL1 notebooks={ntbs} />
    </div>)
}

export default PagesView;

function SelectNtb() {
  return (
    <select>
      <option value="someOption">Some option</option>
      <option value="otherOption">Other option</option>
    </select>)
}

async function NtbList() {

  const cntx = useAppContext();


  const ejj = async (cntx) => {
    console.log(cntx);
    const ntbl = cntx.notebooks.map(ntb => <option>{ntb.displayName}</option>);
    return (ntbl);
  };
  //const ntbl =  await cntx.notebooks.map(ntb => <option>{ntb.displayName}</option>);
  return (
    <NtbOption cntx={cntx} />
  )
}

function NtbOption(cntx) {
  return (
    <>
      {cntx.notebooks.map(
        function (props) {
          const ntbName = props.displayName;
          return (
            <tr >

              <td>
                <div >{ntbName}</div>

              </td>
            </tr>
          )
        }
      )}
    </>);
}

function NtbOpt1(dName) {
  return <option>{dName}</option>
}

function NtbL1(notebooks) {
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