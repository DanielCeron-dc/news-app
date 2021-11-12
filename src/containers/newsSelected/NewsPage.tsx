import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import useWindow from 'hooks/useWindow';
import classes from './NewsPage.module.css'; 
import {INews} from 'store/news/ICityInfo';
import Loader from 'components/Loader/Loader';
import useCityInfo from 'store/news/useCityInfo';

const NewsId:React.FC = () => {
    
    const [newSelected, setNewSelected] = useState<INews|undefined>(undefined); 
    const { newsId } = useParams();
    const navigate = useNavigate();
    
    const {cityInfo } = useCityInfo(); 
    const { isMobile } = useWindow();
    

    const getNewSelected = useCallback(
        () => {
            const news = cityInfo.news;
            const newSelected = news.find(
                (newsItem: INews) => newsItem.title === newsId
            );
            setNewSelected(newSelected);
        },
        [newsId],
    ); 

    useEffect(() => {
        getNewSelected(); 
    }, [getNewSelected]);

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

    return <div style ={{backgroundColor:'var(--color2)', color: 'var(--text)'}} className = {classes.card}>
            {isMobile && <Button
                onClick={() => navigate('/')}
                variant="contained"
                style={{ position: 'fixed', bottom: '0', right: '0', margin: '1rem' }}
            >
                Back
            </Button>
        }

        {newSelected ? <>
            <img src={newSelected.urlToImage} alt={newSelected.title} style={{height:'20rem', width: '100%', backgroundColor: "mediumseagreen"}}/>
            <Typography variant = "h4" className = {classes.title}>
                    {newsId}
            </Typography>
            <Typography variant="caption">
                Author: {newSelected.author}
            </Typography>
            <Typography variant="body1">
                {newSelected.description}
            </Typography>
            <Typography variant="body1">
                {newSelected.content}
            </Typography>
            <Typography variant="body1">
                {new Date(newSelected.publishedAt).toLocaleDateString("en-US")}
            </Typography>
        </> : <Loader />
        }
       
    </div>
}
export default NewsId;