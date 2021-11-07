import { useContext } from "react";
import INews from "./Inews";
import { NewsContext } from "./newsContext";

const useNews = (): { news: INews[], error: string | null, loading: boolean } => {
    const { news , error , loading} = useContext(NewsContext);
    return { news, error, loading };
};

export default useNews;
