import { 
    createContext, 
    useContext, 
    useState, 
    useEffect 
} from 'react';

import { CallG } from './GS';

const appContext = createContext({
    ntbs: undefined,
    selectedNtb: undefined
});

export function useAppContext() {
    return useContext(appContext);
}

export default function ProvideAppContext({ children }) {
    const cntx = useProvideAppContext();
    return (
        <appContext.Provider value={cntx}>
            {children}
        </appContext.Provider>
    );
}

function useProvideAppContext() {
    const [notebooks, setNotebooks] = useState();
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
    });
    const selectedNtb = undefined;
    return {
        notebooks,
        selectedNtb
    };
}