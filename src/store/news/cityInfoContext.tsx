import { createContext } from "react";
import ICityInfo  from "./ICityInfo";

interface INewsContext {
    cityInfo: ICityInfo;
    fetchInfoFromBackend: (city:string|undefined) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
}


export const initialCityInfo: ICityInfo = {
    currentWheather: {
        temperature: 0,
        wheatherDescription: [], 
    },
    news: []
}

// create a react contex
export const cityInfoContext = createContext<INewsContext>({
    cityInfo: initialCityInfo,
    fetchInfoFromBackend: () => {},
    loading: true,
    setLoading: () => {},
    error: null,
    setError: () => { }
});

