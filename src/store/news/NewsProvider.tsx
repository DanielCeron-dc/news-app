import React, { useEffect, useState } from 'react';
import INews from './Inews';
import { NewsContext } from './newsContext';


export const NewsProvider: React.FC = ({ children }) => {
    const [news, setNews] = useState<INews[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=c9e0f0b8d9f14a1a8c6ea5d6b8a6a8f6"
            );
            const data = await response.json();
            setNews(data.articles);
            setLoading(false);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    };

    const fetchOneNews = async (id: string) : Promise<INews | undefined>  => {
        return undefined; 
    }; 

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <NewsContext.Provider
            value={{
                news,
                setNews,
                loading,
                setLoading,
                error,
                setError,
                getOneNews: fetchOneNews
            }}
        >
            {children}
        </NewsContext.Provider>
    );
}