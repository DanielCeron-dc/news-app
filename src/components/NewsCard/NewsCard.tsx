import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {INews} from 'store/news/ICityInfo';
import classes from './NewsCard.module.css';


interface NewsCardProps{
    news: INews;
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    
    const { city, lat, lng } = useParams();
    const navigate = useNavigate();

    // if description is to long, cut it
    let title = news.title;
    if (title.length > 100) {
        title = title.substring(0, 100) + '...';
    }

    const onClickHandler = () => {
        navigate("/" + city + "/" + lat + "/" + lng + "/" + news.title, { replace: false });
    }

    return <Card className={classes.Card} onClick = {onClickHandler} style = {{backgroundColor: 'var(--color2)', color: 'var(--text)'}}>
        <img src={news.urlToImage} alt="news" style={{ width: '100%', height: '8rem', backgroundColor: 'gray'}}/>
        <CardContent>
            <Typography variant = "body1">
                {title}
            </Typography>
        </CardContent>
    </Card>


}
export default NewsCard;