import React, { CSSProperties, useEffect, useRef } from 'react';


interface MapProps {
    center?: google.maps.LatLngLiteral;
    zoom?: number;
    style?: CSSProperties;
    className?: string;
};

const Map: React.FC<MapProps> = ({ center = { lat: 52.370216, lng: 4.895168}, zoom = 10, style, className }) => {

    const refMap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refMap.current) return;
        if (!google) return;

        const map: google.maps.Map = new google.maps.Map(refMap.current, {
            center,
            zoom,
            fullscreenControl: false,
            mapTypeControl: false,
            zoomControl: false,
        });

        new google.maps.Marker({ position: center, map });
    }, [])

    return <div ref={refMap} style={style} className={className} />
}
export default Map;