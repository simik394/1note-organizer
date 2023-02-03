import {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

import { CallG } from './scripts/GS';

const appContext = createContext({
    ntbs: undefined,
});
const ntbContext = createContext({
    selectedNtb: undefined
});

export function useAppContext() {
    return useContext(appContext);
}
export function useNtbContext() {
    return useContext(ntbContext);
}
export function ProvideAppContext({ children }) {
    const cntx = useProvideAppContext();
    return (
        <appContext.Provider value={cntx}>
            {children}
        </appContext.Provider>
    );
}
export  function ProvideNtbContext({ children }) {
    const sntb = useProvideNtbContext();
    return (
        <ntbContext.Provider value={sntb}>
            {children}
        </ntbContext.Provider>
    );
}

function useProvideAppContext() {
    const [notebooks, setNotebooks] = useState();
    useEffect(() => {
        const graphPath = '/me/onenote/notebooks/';
        const loadNotebooks = async () => {
            
            if (!notebooks) { 
                const ntbs = await CallG(graphPath);
                const ntbsval = ntbs.value;
                setNotebooks(ntbsval);
            } else { console.log("uz něco je"); console.log(notebooks) }

        };

        loadNotebooks();
        
    
    });
    
    return {
        notebooks
    };
}

function useProvideNtbContext() {
    
    const [selectedNtb, setSelectedNtb] = useState();
    return {
        selectedNtb,
        setSelectedNtb
    };
}