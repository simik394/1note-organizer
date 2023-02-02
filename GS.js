import { Providers } from '@microsoft/mgt'




export async function CallG() {
    const provider = Providers.globalProvider;
    //console.log(provider);
    const gClient = provider.graph.client;
    //console.log(gClient);
    const graphPath = '/me/onenote/notebooks/';
    var response = await gClient
        .api(graphPath)
        .get();
    //console.log(response.value);
    return (response.value);
}

export async function testMe() {
    const provider = Providers.globalProvider;
    console.log(provider);
    const gClient = provider.graph.client.api("/me").get();
    console.log(gClient);
}