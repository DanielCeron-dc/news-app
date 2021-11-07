import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import classes from './NewsCard.module.css';


type NewsCardProps = {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    onClick?: () => void
}; 

const NewsCard:React.FC<NewsCardProps> = (props) => {

    // if description is to long, cut it
    let description = props.description;
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }


    const divColor = <div style={{ width: '100%', height: '10rem', backgroundColor: 'gray'}}>

    </div>

    return <Card className={classes.Card} onClick = {props.onClick}>
            {divColor}
        <CardContent>
            <Typography variant = "h4">
                {props.title}
            </Typography>
        </CardContent>
    </Card>


}
export default NewsCard;