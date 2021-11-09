import React, { CSSProperties, useEffect, useRef } from 'react';
import { useParams } from 'react-router';


interface MapProps {

    zoom?: number;
    style?: CSSProperties;
    className?: string;
};



const Map: React.FC<MapProps> = ({ zoom = 12, style, className }) => {

    const { lat, lng } = useParams(); 
    const refMap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refMap.current) return;
        if (!google) return;

        const center = { lat: parseFloat(lat ?? '0'), lng: parseFloat(lng ?? '0') }

        const map: google.maps.Map = new google.maps.Map(refMap.current, {
            center ,
            zoom,
            fullscreenControl: false,
            mapTypeControl: false,
            zoomControl: false,
        });

        new google.maps.Marker({ position: center, map });
    }, [lat, lng]); 

    return <div ref={refMap} style={style} className={className} />
}
export default Map;