import React, { useCallback, useEffect, useRef } from 'react';

import NewsCard from 'components/NewsCard/NewsCard';
import { ArrowLeftSharp, ArrowRightSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import classes from './NewsList.module.css';
import useWindow from 'hooks/useWindow';

import {useNavigate } from "react-router-dom"; 

//random image
const ima = 'https://picsum.photos/600/400';
let interval = setInterval(() => {}, 0);

const NewsList: React.FC = () => {

    const divRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useWindow();
    const navigate = useNavigate();

    
    const onClickHandler = () => {
        navigate('/news1');
    }
    
    const card = <NewsCard
        title="News Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        url="https://www.google.com"
        urlToImage={ima}
        publishedAt="2020-01-01"
        onClick = {onClickHandler}
    />


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

    return <div className={classes.newsList} >
       {!isMobile && <IconButton className={`${classes.leftArrow}  ${classes.arrow}`} onClick = {() => scroll(-1000)}>
            <ArrowLeftSharp />
        </IconButton>}
        <div className={classes.list} ref={divRef}>
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}
        </div>
        {!isMobile &&<IconButton className={`${classes.rightArrow}  ${classes.arrow}`} onClick={() => scroll(800)}>
            <ArrowRightSharp />
        </IconButton>}
    </div>
}
export default NewsList;