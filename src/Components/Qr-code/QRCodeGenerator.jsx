// import React from 'react'
import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text for QR code"
      />
      {text && <QRCode id="qrcode" value={text} />}
      {text && <button onClick={downloadQR}>Save QR Code</button>}
    </div>
  );
};

export default QRCodeGenerator;

// import QRCode from "qrcode.react";
// // other code ...
// const downloadQR = () => {
//   const canvas = document.getElementById("123456");
//   const pngUrl = canvas
//     .toDataURL("image/png")
//     .replace("image/png", "image/octet-stream");
//   let downloadLink = document.createElement("a");
//   downloadLink.href = pngUrl;
//   downloadLink.download = "123456.png";
//   document.body.appendChild(downloadLink);
//   downloadLink.click();
//   document.body.removeChild(downloadLink);
// };

// export default function QRCodeGenerator() {
//   return (
//     <div>
//     <QRCode
//       id="123456"
//       value="123456"
//       size={290}
//       level={"H"}
//       includeMargin={true}
//     />
//     <a onClick={downloadQR}> Download QR </a>
//   </div>
//   )
// }

// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';

// const QRCodeGenerator = () => {
//   const [text, setText] = useState('');

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSaveQRCode = () => {
//     // Get the QR code image as a data URL
//     const qrCodeDataURL = document.getElementById('qrcode').toDataURL('image/png');

//     // Create a link element
//     const link = document.createElement('a');
//     link.href = qrCodeDataURL;
//     link.download = 'qrcode.png';

//     // Trigger the download
//     link.click();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleInputChange}
//         placeholder="Enter text for QR code"
//       />
//       {text && <QRCode id="qrcode" value={text} />}
//       {text && <button onClick={handleSaveQRCode}>Save QR Code</button>}
//     </div>
//   );
// };

// export default QRCodeGenerator;
