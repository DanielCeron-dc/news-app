import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {INews} from 'store/news/ICityInfo';
import classes from './NewsCard.module.css';


interface NewsCardProps{
    news: INews;
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    
    const { city } = useParams();
    const navigate = useNavigate();

    // if description is to long, cut it
    let description = news.description;
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    const onClickHandler = () => {
        navigate("/" + city + "/" + news.id, { replace: false });
    }

    return <Card className={classes.Card} onClick = {onClickHandler} style = {{backgroundColor: 'var(--color2)', color: 'var(--text)'}}>
        <img src={news.urlToImage} alt="news" style={{ width: '100%', height: '10rem', backgroundColor: 'gray'}}/>
        <CardContent>
            <Typography variant = "h4">
                {news.title}
            </Typography>
        </CardContent>
    </Card>


}
export default NewsCard;