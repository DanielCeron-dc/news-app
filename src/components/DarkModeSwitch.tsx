import React, { CSSProperties, useState } from 'react';

import { DarkMode } from '@mui/icons-material';
import { Switch } from '@mui/material';

const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 0 1rem',
}
const DarkModeSwitch: React.FC = () => {

    const [darkMode, setdarkMode] = useState(false);

    const changeTheme = () => {
        setdarkMode(!darkMode);
        document.documentElement.style.setProperty('--color1', darkMode ? '#fff' : '#202020');
        document.documentElement.style.setProperty('--color2', darkMode ? '#fff' : '#3a3a3a');
        document.documentElement.style.setProperty('--text', darkMode ? 'dark' : 'white');
    }
    
    return <div style = {style}>
        <DarkMode />
        <Switch
            checked={darkMode}
            onChange={changeTheme}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    </div>
}
export default DarkModeSwitch;