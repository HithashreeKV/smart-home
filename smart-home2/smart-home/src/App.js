import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Modal from "./components/Modal"; 
import LoginModal from "./components/LoginModal"; 

import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./ForgotPassword";

function MainApp() {

  
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  
  const [isLoginOpen, setIsLoginOpen] = useState(false);


  return (
    <>

      <div className="bg-pattern"></div>


      
      <Navbar
        onLoginClick={() => setIsLoginOpen(true)}
      />
<Routes>

        <Route
          path="/"
          element={
            <>

      

      {/* <Home /> */}
      <Home onLoginClick={() => setIsLoginOpen(true)} />

      <About />

      <Testimonials />

      <FAQ />

      <Footer />
</>
          }
        />

<Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
      

      <Modal

        isOpen={isSignupOpen}

        onClose={() => setIsSignupOpen(false)}

        onSwitchToLogin={() => {

          setIsSignupOpen(false);

          setIsLoginOpen(true);

        }}

      />



      <LoginModal

        isOpen={isLoginOpen}

        onClose={() => setIsLoginOpen(false)}

        onSwitchToSignup={() => {

          setIsLoginOpen(false);

          setIsSignupOpen(true);

        }}

      />


    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}