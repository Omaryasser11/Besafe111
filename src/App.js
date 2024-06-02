import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faUser, faHome, faQrcode, faUserCircle, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { atom, useRecoilState } from 'recoil';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Home/HomePage";
import './index.scss';
import UserProfile from "../src/pages/UserProfile/UserProfile.jsx";
import SignUp from "../src/pages/SignUP/SignUp.js";
import ScanQrCode from "../src/pages/ScanQrCode/ScanQrCode.js";
import GenerateQRpage from "./pages/GenerateQrPage/GenerateQRpage";
import QrInformation from "./pages/Qr-Info-In-Scan/QrInformation";
import ForgetPassword from "./pages/ResetPassword/ForgetPassword";
import EnterOTP from "./pages/ResetPassword/EnterOTP";
import ChangePasswordForm from "./pages/ResetPassword/ChangePassword";
import MyXray from "./pages/MyXray/MyXray.jsx";
import MyMedicalTestForm from "./pages/MyMedicalTestForm/MyMedicalTestForm.jsx";
import MyMedicalInfo from "./pages/MedIcalInfoForm/MyMedicalInfo.jsx";
import MyMedicine from "./pages/MyMedicine/MyMedicine.jsx";
import Connect from "./pages/OtherPages/OtherPages.jsx";
import { AuthProvider } from "./store/auth.jsx";
import RequireAuth from "./store/RequireAuth.jsx";
import Navbar from "./MainCompents/Navbar.jsx";


function App() {




  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />



          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/EnterOTP" element={<EnterOTP />} />
            <Route path="/ChangePasswordForm" element={<ChangePasswordForm />} />
            <Route path="/ScanQrCode" element={<ScanQrCode />} />
            <Route path="/GenerateQRpage" element={<GenerateQRpage />} />
            <Route path="/QrInformation" element={<QrInformation />} />
            <Route path="/MyXray" element={<MyXray />} />
            <Route path="/MyMedicine" element={<MyMedicine />} />
            <Route path="/MyMedicalInfo" element={<MyMedicalInfo />} />
            <Route path="/MyMedicalTestForm" element={<MyMedicalTestForm />} />
            <Route path="/Connect to other" element={<RequireAuth>  <Connect />  </RequireAuth>} />
          </Routes>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

