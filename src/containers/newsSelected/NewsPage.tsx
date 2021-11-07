import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import useWindow from 'hooks/useWindow';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './NewsPage.module.css'; 
import useNews from 'store/news/useNews';
import INews from 'store/news/Inews';
import Loader from 'components/Loader/Loader';

const NewsId:React.FC = () => {
    
    const [news, setNews] = useState<INews |undefined>(undefined); 
    const { getOneNews } = useNews(); 

    const { isMobile } = useWindow();
    const { newsId } = useParams();
    const navigate = useNavigate();

    const getNews = useCallback(
        async () => {
            if (!newsId) return;
            const news = await getOneNews(newsId);
            setNews(news);
        },
        [],
    ); 

    useEffect(() => {
        getNews(); 
    }, [getNews]);
    

    useEffect(() => {
        if (!newsId) return
        if (isMobile) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: 850,
                behavior: 'smooth'
            });
        }
    }, [newsId, isMobile]);


    return <Card className={classes.base} style ={{backgroundColor:'var(--color2)', color: 'var(--text)'}}>
        {isMobile && <Button
            onClick={() => navigate('/')}
            variant="contained"
            style={{ position: 'fixed', bottom: '0', right: '0', margin: '1rem' }}
        >
            Back
            </Button>
        }
        <CardContent>
           {news ? <>
                <Typography variant = "h3">
                        {newsId}
                </Typography>
                <img src={news.image} alt={news.title} style={{height:'20rem', width: '100%', backgroundColor: "mediumseagreen"}}/>
                <Typography variant="subtitle1">
                    {news.description}
                </Typography>
            </> : <Loader />
            }
        </CardContent>
    </Card>
}
export default NewsId;