import React, { CSSProperties, useEffect, useRef } from 'react';
import { SearchSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';

import Input from './Input/Input';


const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
}

let autocomplete: google.maps.places.Autocomplete;

const SearchCity: React.FC = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!inputRef.current) return;
        autocomplete =  new google.maps.places.Autocomplete(inputRef.current, {
            types: ['(cities)'],
            fields: ['place_id', 'name', 'types', 'geometry']
        });
    }, []); 

    return <form style={style} onSubmit={
        (e) => {
            e.preventDefault();
            const place = autocomplete.getPlace();
            if (!place) return;
            if (!place.name) return;
            if (!place.geometry) return;
            if (!place.geometry.location) return;
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            navigate('/' + place.name + '/' + lat + '/' + lng);
        }
    }>
        <Input label="City" name="city" ref={inputRef} />
        <IconButton type="submit">
            <SearchSharp fill = "mediumseagreen"/>
        </IconButton>
    </form>
}
export default SearchCity;