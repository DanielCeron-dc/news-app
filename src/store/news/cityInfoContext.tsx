import { createContext } from "react";
import ICityInfo, {INews} from "./ICityInfo";

interface INewsContext {
    cityInfo: ICityInfo;
    setCityInfo: (cityInfo: ICityInfo) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
}

//create a news list array of type INews 
const news:INews[] = [
    {
        id: 1,
        title: "News 1",
        description: "This is news 1",
        urlToImage: "https://picsum.photos/200/300",
        author: "Author 1",
        publishedAt: new Date( "2020-01-01T00:00:00" ),
        content: "This is news 1 content"

    },
    {
        id: 2,
        title: "News 2",
        description: "This is news 2",
        urlToImage: "https://picsum.photos/200/300",
        author: "Author 1",
        publishedAt: new Date("2020-01-01T00:00:00"),
        content: "This is news 1 content"
    },
    {
        id: 3,
        title: "News 3",
        description: "This is news 3",
        urlToImage: "https://picsum.photos/200/300",
        author: "Author 1",
        publishedAt: new Date("2020-01-01T00:00:00"),
        content: "This is news 1 content"
    },
    {
        id: 4,
        title: "News 4",
        description: "This is news 4",
        urlToImage: "https://picsum.photos/200/300",
        author: "Author 1",
        publishedAt: new Date("2020-01-01T00:00:00"),
        content: "This is news 1 content"
    },
    {
        id: 5,
        title: "News 5",
        description: "This is news 5",
        urlToImage: "https://picsum.photos/200/300",
        author: "Author 1",
        publishedAt: new Date("2020-01-01T00:00:00"),
        content: "This is news 1 content"
    },
]


export const exampleCityInfo: ICityInfo = {
    currentWheather: {
        temperature: -8,
        wheatherDescription: ["Sunny"]
    },
    news: news
}

// create a react contex
export const cityInfoContext = createContext<INewsContext>({
    cityInfo: exampleCityInfo,
    setCityInfo: () => {},
    loading: true,
    setLoading: () => {},
    error: null,
    setError: () => { }
});

