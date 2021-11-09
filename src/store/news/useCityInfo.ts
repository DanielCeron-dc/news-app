import { useContext } from "react";
import { cityInfoContext } from "./cityInfoContext";
import ICityInfo from "./ICityInfo";

const useCityInfo = (): { cityInfo: ICityInfo, error: string | null, loading: boolean} => {
    const { cityInfo , error , loading} = useContext(cityInfoContext);
    return {cityInfo , error, loading }; 
};

export default useCityInfo;