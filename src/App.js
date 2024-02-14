import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/LoginPage";
import FormPage from "./pages/Form";
import SignUp from "./pages/SignUP/SignUp";
import ScanQrCode from "./pages/ScanQrCode/ScanQrCode";

import MyXray from "./pages/MyXray/MyXray.jsx";

 
import SSS from "./pages/Medicine/Medicine.jsx"

import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Put Your Layout here */}
        {/* This is Part To Show How Links Work */}
        <div className="col-12 navbarStyle  ">
          
          <span>Be Safe</span>
          <Link className="m-3" to="/">
          Home
          </Link>
        
     
          
          <Link className="m-3" to="/ScanMyQrCode">
            ScanQr
          </Link>
      
          <Link className="m-3" to="/login">
            Login
          </Link>
          <Link className="m-3" to="/SignUp">
           sign up
          </Link>
     
       
        
       
        
         
        
         
        </div>
        
       
      
       
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="ScanQrCode" element={<ScanQrCode/>} />

            {/* <Route path="MyXray" element={<MyXray/>}/>
            <Route path="MyMedicine" element={<MyMedicine/>}/>
            <Route path="MyMedicalAnalysis" element={<MyMedicalAnalysis/>}/>
            <Route path="MyMedicalInfo" element={<MyMedicalInfo/>}/>
             */}
     


          
         
        
        

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
        
<Outlet>
      
       
      </Outlet>
     
      </BrowserRouter>

 
      

    </div>
  );
}

export default App;