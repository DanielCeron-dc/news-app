import React, {  useState } from 'react';
import ICityInfo, { ICurrentWheather } from './ICityInfo';
import {cityInfoContext, initialCityInfo} from './cityInfoContext';


export const CityInfoProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [cityInfo, setCityInfo] = useState<ICityInfo>(initialCityInfo);
    const [error, setError] = useState<string | null>(null);

    const fetchCityInfoFromBackend = async(prmCity: string | undefined):Promise<void> => {
        setLoading(true);
        if (!prmCity || prmCity === "undefined") return;

        try {
            const response = await fetch(
                process.env.REACT_APP_API + prmCity,
                {
                    method: "GET",
                }
            );
            const data = await response.json();
            const wheatherInfo:ICurrentWheather = {temperature: data.currentWeather.temperature,  wheatherDescription: data.currentWeather["weather_descriptions"]};
            setCityInfo({ news: data.news, currentWheather: wheatherInfo });
            setLoading(false);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    };

    return (
        <cityInfoContext.Provider
            value={{
                cityInfo,
                fetchInfoFromBackend: fetchCityInfoFromBackend,
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