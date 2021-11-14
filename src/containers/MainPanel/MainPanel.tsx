import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CloudSharp } from '@mui/icons-material';
import Typography from '@mui/material/Typography/Typography';

import classes from './MainPanel.module.css'; 
import Map from 'components/Map';
import DarkModeSwitch from 'components/DarkModeSwitch';
import Welcome from 'containers/Welcome/Welcome';
import SearchCity from 'components/SearchCity';
import useCityInfo from 'store/news/useCityInfo';


const MainPanel: React.FC = () => {

    const [isSmall, setIsSmall] = useState(false);
    const navigate = useNavigate();
    const { city } = useParams();
    const { cityInfo } = useCityInfo(); 

    const wheather = cityInfo.currentWheather;
    const handleOnScroll = () => window.scrollY > 500 ? setIsSmall(true) : setIsSmall(false);

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

    return <div className={`${classes.MainPanel}  ${isSmall ? classes.small : ''}  ${!city ? classes.onWelcome : ''}`}>
        {!city || !wheather ?  
            <Welcome />
            :
            <>
                <Map className={classes.map} />
                <div className={classes.info}>
                    <Typography variant="h3">
                        {city ? city : 'Москва'}
                    </Typography>
                    <Typography variant="h4" className={classes.wheather}>
                        <CloudSharp /> {wheather.temperature}° {wheather.wheatherDescription[0]}
                    </Typography>
                    <DarkModeSwitch />
                    <div className ={classes.spacer}></div>
                    {!isSmall && <SearchCity />}
                </div>
            </>
        }
    </div>
}
export default MainPanel;