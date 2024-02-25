import React from "react";
import { RecoilRoot } from 'recoil';
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "animate.css";
import "./index.scss";
import App from "./App";
<<<<<<< HEAD
import { RecoilRoot } from "recoil";
import WOW from 'wowjs'
=======
>>>>>>> ed383559c07b39f0838918eb87ab3d74fe5c3870

const root = ReactDOM.createRoot(document.getElementById("root"));
const wow = new WOW.WOW();
wow.init();
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

// #Essentials
// npm i -D react-router-dom@latest
// npm i sass
// npm i bootstrap@latest
// npm i axios
// npm i recoil

// #Fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest

// #Optional
// npm i sweetalert2
// npm i swiper
// npm i wowjs
// npm i animate.css --save

// #How to use
// # wow js
// import { WOW } from "wowjs";
