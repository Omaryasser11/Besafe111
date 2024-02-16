import React, { useRef, useEffect, useState } from 'react';

const MapComponent = ({ latitude, longitude }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (latitude && longitude && !map) {
      const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
      };
      const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);
      setMap(mapInstance);
    }
  }, [latitude, longitude, map]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
