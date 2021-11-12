import { useContext } from "react";
import { cityInfoContext } from "./cityInfoContext";
import ICityInfo from "./ICityInfo";

const useCityInfo = (): { cityInfo: ICityInfo, error: string | null, loading: boolean, fetchInfoFromBackend: (city: string | undefined) => void} => {
    const { cityInfo , error , loading, fetchInfoFromBackend} = useContext(cityInfoContext);
    return {cityInfo , error, loading, fetchInfoFromBackend }; 
};

export default useCityInfo;