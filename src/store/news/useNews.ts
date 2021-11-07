import { useContext } from "react";
import INews from "./Inews";
import { NewsContext } from "./newsContext";

const useNews = (): { news: INews[], error: string | null, loading: boolean, getOneNews: (id: string) => Promise<INews | undefined> } => {
    const { news , error , loading, getOneNews} = useContext(NewsContext);
    return { news, error, loading , getOneNews}; 
};

export default useNews;