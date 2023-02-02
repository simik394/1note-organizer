import { Providers } from '@microsoft/mgt'

export async function CallG() {
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