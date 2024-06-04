import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, BrowserRouter as Router, Link, Outlet } from "react-router-dom";
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
import MyMedicalPaper from "./pages/MyMedicalPaper/MyMedicalPaper.jsx";
import HomeAdmin from "./Admin/AdminPages/HomeAdmin/HomeAdmin.jsx";
import LocationComponent from "./Components/MapLocation/LocationComponent.jsx";
import Navcol from "./Admin/Navcol/Navcol";
import P2 from "./Admin/Pages/Page2/P2";
import Super from "./Admin/SuperAdmin/Super";
import CreateAccount from "./Admin/AdminPages/CreateAccont/CreateAccount.jsx";
import UsersPage from "./Admin/AdminPages/UsersList/UsersPage.jsx"
import HospiatalsPage from "./Admin/AdminPages/UsersList/HospitalsPage.jsx"
function App() {




  return (

    <div className="App">
      <AuthProvider>
        <Router>



          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Outlet />

                </>
              }
            >
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
              <Route path="/MyMedicalPaper" element={<MyMedicalPaper />} />
              <Route path="/LocationComponent" element={<LocationComponent />} />
              <Route path="/Connect to other" element={<RequireAuth>  <Connect />  </RequireAuth>} />
            </Route>
            <Route path="HomeAdmin*" element={<NoNavBarFooterRoutes2 />} />

          </Routes>

        </Router>
      </AuthProvider>
    </div>
  );
  function NoNavBarFooterRoutes2() {
    return (
      <div className="SA2">
        <Navcol />
        <div className="Main2">
          {/* <TopBar /> */}
          <Routes>
            <Route index element={<HomeAdmin />} />
            {/* Add Admin2 route here */}
            <Route path="H1" element={<Super />} />
            <Route path="H2" element={<P2 />} />
            <Route path="*" element={<div>Eroor</div>} />
            <Route path="CreateAccount" element={<CreateAccount />} />
            <Route path="UsersPage" element={<UsersPage />} />
            <Route path="HospiatalsPage" element={<HospiatalsPage />} />
            <Route path="/ScanQrCode" element={<ScanQrCode />} />
            {/* <Route index element={<HomeAdmin />} /> */}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

