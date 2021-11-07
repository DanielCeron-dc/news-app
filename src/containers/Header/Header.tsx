import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CloudSharp } from '@mui/icons-material';
import Typography from '@mui/material/Typography/Typography';

import classes from './Header.module.css'; 
import Map from 'components/Map';
import DarkModeSwitch from 'components/DarkModeSwitch';
import Welcome from 'containers/Welcome/Welcome';
import SearchCity from 'components/SearchCity';

const Header: React.FC = () => {

    const [isSmall, setIsSmall] = useState(false);
    const { city } = useParams();
    const navigate = useNavigate();
    
    const handleOnScroll = () => {
        if (window.scrollY > 500) {
            setIsSmall(true);
        }else { 
            setIsSmall(false);
        }
    }

    useEffect(() => {
        if (!city || city === 'undefined') {
            navigate('/');
        }
    }, [city]);

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => {
            return window.removeEventListener('scroll', handleOnScroll);
        }
    }, []);

    return <div className={`${classes.Header}  ${isSmall ? classes.small : ''}  ${!city ? classes.onWelcome : ''}`}>
        {!city ?
            <Welcome />
            :
            <>
                <Map className={classes.map} />
                <div className={classes.info}>
                    <Typography variant="h3">
                        {city ? city : 'Москва'}
                    </Typography>
                    <Typography variant="h4" className={classes.wheather}>
                        <CloudSharp /> 8° Sunny
                    </Typography>
                    <DarkModeSwitch />
                    <div className ={classes.spacer}></div>
                    {!isSmall && <SearchCity />}
                </div>
            </>
        }
    </div>
}
export default Header;