import React from 'react';

const GoogleMapIframe = ({ latitude, longitude }) => {
  const iframeSrc = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.294332016607!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzU4LjkiTiAzMcKwMDknMTYuOCJF!5e0!3m2!1sar!2seg!4v1708018094130!5m2!1sar!2seg`;

  return (
    <iframe
      src={iframeSrc}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMapIframe;
