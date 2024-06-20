import React, { useEffect, useState } from "react";
import baseUrl from "../../BaseUrl";
import { useParams } from "react-router-dom";
import GoogleMapIframe from "./GoogleMapIframe";

const ShowMapLocation = () => {
  const { id } = useParams();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);


  const getLocation = async () => {
    try {
      const { data } = await baseUrl.get(`/locations/${id}`);
      setLatitude(data?.latitude);
      setLongitude(data?.longitude);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <GoogleMapIframe latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default ShowMapLocation;
