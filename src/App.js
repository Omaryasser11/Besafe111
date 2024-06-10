import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link,
  Outlet,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Home/HomePage";
import "./index.scss";
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
import ProtectPage from "./store/ProtectPage.jsx";
import LocationComponent from "./Components/MapLocation/LocationComponent.jsx";
import HomeAdmin from "./Admin/AdminPages/HomeAdmin/HomeAdmin.jsx";
import Navcol from "./Admin/Navcol/Navcol";
import P2 from "./Admin/Pages/Page2/P2";
import Super from "./Admin/SuperAdmin/Super";
import CreateAccount from "./Admin/AdminPages/CreateAccont/CreateAccount.jsx";
import UsersPage from "./Admin/AdminPages/UsersList/UsersPage.jsx";
import HospiatalsPage from "./Admin/AdminPages/UsersList/HospitalsPage.jsx";
import HomeHospital from "./Hospital/HospitalPages/HomeHospital.jsx";
import HospitalNaV from "./Hospital/Compents/HospitalNaV.jsx";
import "./Hospital/Hoaptial.scss";
import MedicalInfo from "./Hospital/HospitalPages/MedicalInfo/MedicalInfo.jsx";
import ScanQrCodeHospital from "./Hospital/HospitalPages/ScanQrCodeHospital/ScanQrCodeHospital.jsx";
import MedicalRecords from "./Hospital/HospitalPages/MedicalRecords/MedicalRecords.jsx";
import ShowMapLocation from "./Components/MapLocation/ShowMapLocation.jsx";

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
              <Route
                path="/login"
                element={
                  <ProtectPage>
                    <LoginPage />
                  </ProtectPage>
                }
              />
              <Route path="/UserProfile" element={<UserProfile />} />
              <Route
                path="/SignUp"
                element={
                  <ProtectPage>
                    <SignUp />
                  </ProtectPage>
                }
              />
              <Route
                path="/ForgetPassword"
                element={
                  <ProtectPage>
                    <ForgetPassword />
                  </ProtectPage>
                }
              />
              <Route
                path="/EnterOTP"
                element={
                  <ProtectPage>
                    <EnterOTP />
                  </ProtectPage>
                }
              />
              <Route
                path="/ChangePasswordForm"
                element={
                  <ProtectPage>
                    <ChangePasswordForm />
                  </ProtectPage>
                }
              />
                          <Route path="/Loc" element={<LocationComponent />} />
              <Route path="/ScanQrCode" element={<ScanQrCode />} />
              <Route path="/GenerateQRpage" element={<GenerateQRpage />} />
              <Route path="/QrInformation" element={<QrInformation />} />
              <Route path="/MyXray" element={<MyXray />} />
              <Route path="/MyMedicine" element={<MyMedicine />} />
              <Route path="/MyMedicalInfo" element={<MyMedicalInfo />} />
              <Route
                path="/MyMedicalTestForm"
                element={<MyMedicalTestForm />}
              />
              <Route path="/MyMedicalPaper" element={<MyMedicalPaper />} />{" "}
              <Route
                path="/LocationComponent/:id"
                element={<ShowMapLocation />}
              />
              <Route
                path="/Connect to other"
                element={
                  <RequireAuth>
                    <Connect />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="HomeAdmin*" element={<NoNavBarFooterRoutes2 />} />
            <Route path="Hoaptial*" element={<NoNavBarFooterRoutes3 />} />
          </Routes>
        </Router>
        <LocationComponent />
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

  function NoNavBarFooterRoutes3() {
    return (
      <div className="Hoaptial">
        <HospitalNaV />
        <div className="MainHospital">
          {/* <TopBar /> */}
          <Routes>
            <Route index element={<HomeHospital />} />
            {/* Add Admin2 route here */}
            <Route path="MedicalInfo" element={<MedicalInfo />} />
            <Route path="MedicalRecords" element={<MedicalRecords />} />
            <Route path="*" element={<div>Eroor</div>} />
            <Route path="CreateAccount" element={<CreateAccount />} />
            <Route path="UsersPage" element={<UsersPage />} />
            <Route path="HospiatalsPage" element={<HospiatalsPage />} />
            <Route
              path="/ScanQrCodeHospital"
              element={<ScanQrCodeHospital />}
            />
            {/* <Route index element={<HomeAdmin />} /> */}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
