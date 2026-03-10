import { useEffect, useRef } from 'react';
import { signupUser, verifyOtp } from "../api/authApi";
import { useState } from "react";

// const [showOtpBox, setShowOtpBox] = useState(false);
// const [userEmail, setUserEmail] = useState("");
// const [otp, setOtp] = useState("");

const Modal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const modalRef = useRef(null);
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [pendingUser, setPendingUser] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const name = e.target.fullName.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const confirmPassword = e.target.confirmPassword.value;

  //   if (password !== confirmPassword) {
  //     alert('Passwords do not match!');
  //     return;
  //   }

  // //   alert("Signup successful!");

  // // e.target.reset();

  
  // // onClose();

  
  // // onSwitchToLogin();
  // try {
  //   await signupUser({
  //     name,
  //     email,
  //     password
  //   });

  //   setUserEmail(email);
  //   setShowOtpBox(true);
  //   alert("OTP sent to your email!");

  // } catch (error) {
  //   alert("Signup failed");
  // }
  // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const name = e.target.fullName.value;
//   const email = e.target.email.value;
//   const password = e.target.password.value;
//   const confirmPassword = e.target.confirmPassword.value;

//   if (password !== confirmPassword) {
//     alert("Passwords do not match!");
//     return;
//   }

//   try {
//     await signupUser({
//       name,
//       email,
//       password
//     });

//     setUserEmail(email);
//     setShowOtpBox(true);
//     alert("OTP sent to your email!");

//   } catch (error) {
//     alert("Signup failed");
//     console.log(error);
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  const name = e.target.fullName.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const message = await signupUser({ name, email, password });

    if (message !== "OTP sent to email.") {
      alert(message);
      return;
    }

    setUserEmail(email);
    setPendingUser({ name, email, gender: e.target.gender.value, interest: e.target.interest.value });
    setShowOtpBox(true);
    alert("OTP sent to your email!");

  } catch (error) {
    alert("Signup failed");
  }
};

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`} 
      onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}
      role="dialog" 
      aria-modal="true"
    >
      <div className="modal" ref={modalRef}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Create Account</h3>
          <button className="text-gray-400 hover:text-white transition-colors" onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="input-field" placeholder="Enter your full name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="input-field" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Gender</label>
            <div className="block text-sm font-medium text-gray-400 mb-2">
              <label>
                <input type="radio" name="gender" value="Male" width={20} height={20} required />
                Male
              </label>
              <br/>
              <label>
                <input type="radio" name="gender" value="Female" />
                Female
              </label>
              <br/>
              <label>
                <input type="radio" name="gender" value="Other" />
                Other
              </label>
            </div>
          </div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Primary Interest</label>
          <div className="block text-sm font-medium text-gray-400 mb-2">
          <select name="interest" style={{color: '#020f21'}} required>
            
            <option value="" className="input-field" >Select Interest</option>
            <option style={{color: '#020f21'}}>Energy Efficiency</option>
            <option style={{color: '#020f21'}}>Security</option>
            <option style={{color: '#020f21'}}>Comfort</option>
            <option style={{color: '#020f21'}}>Convenience</option>
          </select>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input type="password" id="password" name="password" className="input-field" placeholder="Create a password" required />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="input-field" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="btn-primary w-full py-3 mt-6">
            Create Account
          </button>
        </form>

        {showOtpBox && (
  <div style={{ marginTop: "20px" }}>
    <input
      type="text"
      placeholder="Enter OTP"
      onChange={(e) => setOtp(e.target.value)}
      className="input-field"
    />
    <button
      className="btn-primary w-full py-3 mt-4"
      // onClick={async () => {
      //   try {
      //     await verifyOtp({
      //       email: userEmail,
      //       otp: otp
      //     });

      //     alert("Account verified successfully!");
      //     onClose();
      //     onSwitchToLogin();
      //   } catch {
      //     alert("Invalid OTP");
      //   }
      // }}

      onClick={async () => {
    try {
      const message = await verifyOtp({
        email: userEmail,
        otp: otp
      });

      alert(message);

      if (message.includes("successfully")) {
        // Save profile locally (exclude password)
        try {
          if (pendingUser) {
            localStorage.setItem('userProfile', JSON.stringify(pendingUser));
          }
        } catch (e) {
          console.warn('Failed to save profile to localStorage', e);
        }

        onClose();
        onSwitchToLogin();
      }

    } catch {
      alert("Invalid OTP");
    }
  }}
    >
      Verify OTP
    </button>
  </div>
)}
        
        <p className="text-center text-gray-400 text-sm mt-6">
  Already have an account?

  <span
    onClick={onSwitchToLogin}
    className="text-emerald-400 hover:text-emerald-300 font-medium ml-1 cursor-pointer"
  >
    Sign in
  </span>

</p>
      </div>
    </div>
  );
};

export default Modal;