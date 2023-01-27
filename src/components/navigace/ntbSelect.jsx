import React, { useState, useEffect } from 'react';
import { Providers, ProviderState } from '@microsoft/mgt'

const provider = Providers.globalProvider;//.graph.client;
//const gClient = provider.client.api("/me").get();
function NtbSelect(){
    return (<div className="ntb-selector">
        <p>ntb select</p>
        </div>  )
}

export default NtbSelect;