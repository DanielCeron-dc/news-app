import { createContext } from "react";
import INews from "./Inews";

interface INewsContext {
    news: INews[];
    setNews: (news: INews[]) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
    getOneNews: (id: string) => Promise<INews | undefined>;
}


//create a news list array of type INews 
const news:INews[] = [
    {
        id: 1,
        title: "News 1",
        description: "This is news 1",
        image: "https://picsum.photos/200/300",
        date: new Date(),
    },
    {
        id: 2,
        title: "News 2",
        description: "This is news 2",
        image: "https://picsum.photos/200/300",
        date: new Date(),
    },
    {
        id: 3,
        title: "News 3",
        description: "This is news 3",
        image: "https://picsum.photos/200/300",
        date: new Date(),
    },
    {
        id: 4,
        title: "News 4",
        description: "This is news 4",
        image: "https://picsum.photos/200/300",
        date: new Date(),
    },
    {
        id: 5,
        title: "News 5",
        description: "This is news 5",
        image: "https://picsum.photos/200/300",
        date: new Date(),
    },
]



// create a react contex
export const NewsContext = createContext<INewsContext>({
    news: news,
    setNews: () => {},
    loading: true,
    setLoading: () => {},
    error: null,
    setError: () => { },
    getOneNews: async () => undefined
});

