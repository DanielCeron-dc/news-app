import React, { CSSProperties } from 'react';
import { SearchSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';

import Input from './Input/Input';

const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
}

const SearchCity: React.FC = () => {
    const navigate = useNavigate(); 

    return <form style={style} onSubmit={
        (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            navigate('/' + data.get('city'));
        }
    }>
        <Input label="City" name="city" />
        <IconButton type="submit">
            <SearchSharp fill = "mediumseagreen"/>
        </IconButton>
    </form>
}
export default SearchCity;