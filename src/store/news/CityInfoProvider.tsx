import React, { useEffect, useState } from 'react';
import ICityInfo from './ICityInfo';
import {cityInfoContext, exampleCityInfo} from './cityInfoContext';

export const CityInfoProvider: React.FC = ({ children }) => {
    const [cityInfo, setCityInfo] = useState(exampleCityInfo);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCityInfoFromBackend = async():Promise<ICityInfo> => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=c9e0f0b8d9f14a1a8c6ea5d6b8a6a8f6"
            );
            const data = await response.json();
            setLoading(false);
            return data.articles;
        } catch (error: any) {
            setError(error);
            setLoading(false);
            return {} as ICityInfo;
        }
    };

    useEffect(() => {
        //fetchNews();
    }, []);

    return (
        <cityInfoContext.Provider
            value={{
                cityInfo,
                setCityInfo,
                loading,
                setLoading,
                error,
                setError
            }}
        >
            {children}
        </cityInfoContext.Provider>
    );
}