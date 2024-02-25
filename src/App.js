import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/LoginPage";
import FormPage from "./pages/Form";
import SignUp from "./pages/SignUP/SignUp";
import ScanQrCode from "./pages/ScanQrCode/ScanQrCode";
import MyXray from "./pages/MyXray/MyXray.jsx";
import LOGO from "./assets/LOGO1.png";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import MyMedicalTestForm from "./pages/MyMedicalTestForm/MyMedicalTestForm.jsx";
import MyMedicine from "./pages/MyMedicine/MyMedicine.jsx";
import MyMedicalInfo from "./pages/MedIcalInfoForm/MyMedicalInfo.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Put Your Layout here */}
        {/* This is Part To Show How Links Work */}
        <div className="col-12 navbarStyle  ">
          <div className="logo1"> <img src={LOGO} /></div>
          <div className="Linkss">
            <Link className="m-3" to="/">Home</Link>
            <Link className="m-3" to="/ScanMyQrCode">Scan Qr</Link>
            <Link className="m-3" to="/login">Login</Link>
            <Link className="m-3" to="/SignUp">sign up </Link>
          </div>
        </div>

        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="ScanQrCode" element={<ScanQrCode />} />
            <Route path="MyXray" element={<MyXray />} />
            <Route path="MyMedicalTestForm" element={<MyMedicalTestForm />} />
            <Route path="MyMedicine" element={<MyMedicine />} />

            <Route path="MyMedicallInfo" element={<MyMedicalInfo />} />
            {
              /* <Route path="MyXray" element={<MyXray/>}/>
              <Route path="MyMedicine" element={<MyMedicine/>}/>
              <Route path="MyMedicalAnalysis" element={<MyMedicalAnalysis/>}/>
              <Route path="MyMedicalInfo" element={<MyMedicalInfo/>}/>
               */
            }
            <Route path="*" element={"Page 404"} />
          </Route>
        </Routes>

        {/*        
  <footer className="Footer navbar-dark bg-dark">

<div className="column1">
    <p>about us</p>
   <p>our idea</p>
   <p>about us</p>
   <p>our idea</p>
</div>
<div className="column2">
<p>about us</p>
   <p>our idea</p>
   <p>about us</p>
   <p>our idea</p>
</div>
<div className="column3">
<p>about us</p>
   <p>our idea</p>
   <p>about us</p>
   <p>our idea</p>
</div>
</footer> */}

        <Outlet></Outlet>
      </BrowserRouter>
    </div>
  );
}

export default App;
