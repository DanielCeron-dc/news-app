import { createContext } from "react";
import INews from "./Inews";

interface INewsContext {
    news: INews[];
    setNews: (news: INews[]) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
}

// create a react contex
export const NewsContext = createContext<INewsContext>({
    news: [],
    setNews: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
});

