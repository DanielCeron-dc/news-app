import React from 'react';


import { Typography } from '@mui/material';
import DarkModeSwitch from 'components/DarkModeSwitch';
import worldImg from 'assets/img/world.png';

import classes from './Welcome.module.css';
import SearchCity from 'components/SearchCity';

const Welcome:React.FC = () => {
    
    return <div className={classes.welcome}>
        <Typography variant="h2" className={classes.title}>
            Welcome
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
            Find out the weather and news in your city
        </Typography>
        <DarkModeSwitch />
        <SearchCity />
    </div>
}
export default Welcome;