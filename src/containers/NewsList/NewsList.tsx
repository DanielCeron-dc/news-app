import React, { useCallback, useEffect, useRef } from 'react';
import { ArrowLeftSharp, ArrowRightSharp } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';

import NewsCard from 'components/NewsCard/NewsCard';
import useWindow from 'hooks/useWindow';
import classes from './NewsList.module.css'; 

import Loader from 'components/Loader/Loader';
import useCityInfo from 'store/news/useCityInfo';
import { useParams } from 'react-router';

let interval = setInterval(() => {}, 0);

const NewsList: React.FC = () => {

    const divRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useWindow();
    const { cityInfo, loading, fetchInfoFromBackend } = useCityInfo();
    const { city } = useParams();
    
    const news = cityInfo?.news;

    useEffect(() => {
        fetchInfoFromBackend(city);
    }, [city]);



    const autoScroll = useCallback(
        () => {
            if (!divRef.current) return;
            divRef.current.scrollTo({
                left: divRef.current.scrollLeft + 1,
                behavior: 'auto',
            })
        },
        [],
    )

    useEffect(() => {
        if (isMobile) return;
        interval = setInterval(autoScroll, 100);
        return () => clearInterval(interval);
    }, [autoScroll , isMobile]);


    const scroll = (cuantity: number) => {
        if (!divRef.current) return;
        clearInterval(interval);
        divRef.current.scrollTo({
            left: divRef.current.scrollLeft + cuantity,
            behavior: 'smooth',
        })
    }

    const listJSX = <>
        {!isMobile && <IconButton className={`${classes.leftArrow}  ${classes.arrow}`} onClick={() => scroll(-1000)}>
            <ArrowLeftSharp fill="var(--text)" />
        </IconButton>}
        <div className={classes.list} ref={divRef}>
            {
                news.length === 0 && <Typography variant="h5" className={classes.noNews}>
                    No news for this city 😕
                </Typography>
            }
            {news && news.map((item ) => <NewsCard
                news = {item}
            />)}
        </div>
        {!isMobile && <IconButton className={`${classes.rightArrow}  ${classes.arrow}`} onClick={() => scroll(800)}>
            <ArrowRightSharp fill="var(--text)" />
        </IconButton>}
    </>

    return <div className={classes.newsList} >
        {loading ? <Loader /> : listJSX}
    </div>
}
export default NewsList;