import React, { useState, useEffect } from 'react';

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
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          <button onClick={handleOpenGoogleMaps}>Open in Google Maps</button>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;
