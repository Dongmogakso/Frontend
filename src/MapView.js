import React, { useEffect } from "react";

const { kakao } = window;

const MapView = () => {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.2841, 127.0454),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, []);

    useEffect(() => {
        console.log(window);
    }, [window])

    return (
        <div id="map" className="w-screen h-screen">
            
        </div>
    )
}

export default MapView;