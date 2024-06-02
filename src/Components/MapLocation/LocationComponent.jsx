import React, { useState, useEffect } from 'react';
import GoogleMapIframe from './GoogleMapIframe';
const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        setError('Unable to retrieve your location');
      }
    );
  }, []);

  const handleOpenGoogleMaps = () => {
    if (latitude !== null && longitude !== null) {
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div>
    <h1>Google Map Example</h1>
    <GoogleMapIframe latitude={latitude} longitude={longitude} />
  </div>
  );
};

export default LocationComponent;
