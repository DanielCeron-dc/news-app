
import Typography from '@mui/material/Typography/Typography';
import React, { useEffect, useState } from 'react';
import classes from './Header.module.css'; 
import { CloudSharp, SearchSharp } from '@mui/icons-material';
import Input from 'components/Input/Input';
import Map from 'components/Map';

const Header: React.FC = () => {

    const [isSmall, setIsSmall] = useState(false); 

    const handleOnScroll = () => {
        if (window.scrollY > 500) {
            setIsSmall(true);
        }else { 
            setIsSmall(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => {
            return window.removeEventListener('scroll', handleOnScroll);
        }
    }, []);

    
    return <div className={`${classes.Header}  ${ isSmall ? classes.small : ''} `}>
        <Map className = {classes.map}/>
        <div className = {classes.info}>
            <Typography  variant = "h3">
                Amsterdam
            </Typography>
            <Typography variant="h4" className={classes.wheather}>
                <CloudSharp /> {"  "} 25°
            </Typography>
            <div className = {classes.search}>
                <SearchSharp />
                <Input label="City" className={classes.search__input} />
            </div>
        </div>
    </div>
}
export default Header;