// // // import React, { useState } from "react";
// // // import { forgotPassword, resetPassword } from "./api/authApi";

// // // function ForgotPassword() {

// // //   const [step, setStep] = useState(1);
// // //   const [email, setEmail] = useState("");
// // //   const [otp, setOtp] = useState("");
// // //   const [newPassword, setNewPassword] = useState("");

// // // //   const sendOtp = async () => {
// // // //     try {
// // // //       // await forgotPassword({ email });
// // // //       const message = await forgotPassword(email);
// // // // alert(message);
// // // // if (message.includes("OTP sent")) {
// // // //   setStep(2);
// // // // }
// // // //       alert("OTP sent!");
// // // //       setStep(2);
// // // //     } catch {
// // // //       alert("Error sending OTP");
// // // //     }
// // // //   };

// // // const sendOtp = async () => {
// // //   try {
// // //     const message = await forgotPassword(email); // NOT { email }

// // //     alert(message);

// // //     if (message.includes("OTP sent")) {
// // //       setStep(2);
// // //     }

// // //   } catch {
// // //     alert("Error sending OTP");
// // //   }
// // // };

// // //   // const handleReset = async () => {
// // //   //   try {
// // //   //     await resetPassword({ email, otp, newPassword });
// // //   //     alert("Password reset successful!");
// // //   //   } catch {
// // //   //     alert("Invalid OTP");
// // //   //   }
// // //   // };

// // //   const handleReset = async () => {
// // //   try {
// // //     const message = await resetPassword({ email, otp, newPassword });

// // //     alert(message);

// // //     if (message.includes("successful")) {
// // //       window.location.href = "/";
// // //     }

// // //   } catch {
// // //     alert("Invalid OTP");
// // //   }
// // // };

// // //   return (
// // //     <div style={{ padding: "40px" }}>
// // //       <h2>Forgot Password</h2>

// // //       {step === 1 && (
// // //         <>
// // //           <input
// // //             type="email"
// // //             placeholder="Enter Email"
// // //             onChange={(e) => setEmail(e.target.value)}
// // //           />
// // //           <button onClick={sendOtp}>Send OTP</button>
// // //         </>
// // //       )}

// // //       {step === 2 && (
// // //         <>
// // //           <input
// // //             type="text"
// // //             placeholder="Enter OTP"
// // //             onChange={(e) => setOtp(e.target.value)}
// // //           />
// // //           <input
// // //             type="password"
// // //             placeholder="New Password"
// // //             onChange={(e) => setNewPassword(e.target.value)}
// // //           />
// // //           <button onClick={handleReset}>Reset Password</button>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default ForgotPassword;

// // // =======================================================



// // import React, { useState } from "react";
// // import { forgotPassword, resetPassword } from "./api/authApi";
// // import { useNavigate } from "react-router-dom";

// // function ForgotPassword() {

// //   const navigate = useNavigate();

// //   const [step, setStep] = useState(1);
// //   const [email, setEmail] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [newPassword, setNewPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   // STEP 1 → SEND OTP
// //   const sendOtp = async () => {
// //     if (!email) {
// //       alert("Please enter email");
// //       return;
// //     }

// //     const message = await forgotPassword(email);
// //     alert(message);

// //     if (message.includes("OTP sent")) {
// //       setStep(2);
// //     }
// //   };

// //   // STEP 2 → VERIFY OTP & SHOW PASSWORD FIELDS
// //   const verifyAndProceed = () => {
// //     if (!otp) {
// //       alert("Enter OTP");
// //       return;
// //     }

// //     setStep(3);
// //   };

// //   // STEP 3 → RESET PASSWORD
// //   const handleReset = async () => {

// //     if (newPassword !== confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }

// //     const message = await resetPassword({
// //       email,
// //       otp,
// //       newPassword
// //     });

// //     alert(message);

// //     if (message.includes("successful")) {
// //       navigate("/");
// //     }
// //   };

// //   return (
// //     <div style={{ padding: "40px" }}>
// //       <h2>Forgot Password</h2>

// //       {step === 1 && (
// //         <>
// //           <input
// //             type="email"
// //             placeholder="Enter Registered Email"
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           <button onClick={sendOtp}>Send OTP</button>
// //         </>
// //       )}

// //       {step === 2 && (
// //         <>
// //           <input
// //             type="text"
// //             placeholder="Enter OTP"
// //             onChange={(e) => setOtp(e.target.value)}
// //           />
// //           <button onClick={verifyAndProceed}>Verify OTP</button>
// //         </>
// //       )}

// //       {step === 3 && (
// //         <>
// //           <input
// //             type="password"
// //             placeholder="New Password"
// //             onChange={(e) => setNewPassword(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Confirm New Password"
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //           />
// //           <button onClick={handleReset}>Reset Password</button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default ForgotPassword;


// // ================ the above code is working completely but with bad ui






// import React, { useState, useEffect } from "react";
// import { forgotPassword, resetPassword } from "./api/authApi";
// import { useNavigate } from "react-router-dom";

// function ForgotPassword() {

//   const navigate = useNavigate();

//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   // STEP 1 - SEND OTP
//   const sendOtp = async () => {
//     if (!email) {
//       alert("Please enter email");
//       return;
//     }

//     const message = await forgotPassword(email);
//     alert(message);

//     if (message.includes("OTP sent")) {
//       setStep(2);
//     }
//   };

//   // STEP 3 - RESET PASSWORD
//   const handleReset = async () => {

//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const message = await resetPassword({
//       email,
//       otp,
//       newPassword
//     });

//     alert(message);

//     if (message.includes("successful")) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="modal-overlay active">
//       <div className="modal">

//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-2xl font-bold">Forgot Password</h3>
//           <button
//             className="text-gray-400 hover:text-white transition-colors"
//             onClick={() => navigate("/")}
//           >
//             ✕
//           </button>
//         </div>

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-400 mb-2">
//                 Registered Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your registered email"
//                 className="input-field"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <button
//               className="btn-primary w-full py-3 mt-6"
//               onClick={sendOtp}
//             >
//               Send OTP
//             </button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-400 mb-2">
//                 Enter OTP
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 className="input-field"
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//             </div>

//             {/* <button
//               className="btn-primary w-full py-3 mt-6"
//               onClick={() => setStep(3)}
//             >
//               Verify OTP
//             </button> */}

//             <button
//   className="btn-primary w-full py-3 mt-6"
//   onClick={async () => {

//     if (!otp) {
//       alert("Please enter OTP");
//       return;
//     }

//     // Call resetPassword ONLY to verify OTP
//     const message = await resetPassword({
//       email,
//       otp,
//       newPassword: "temp_check" // temporary password just for verification
//     });

//     if (message.toLowerCase().includes("invalid")) {
//       alert("Invalid OTP");
//       return;
//     }

//     // If OTP is correct, move to next step
//     setStep(3);
//   }}
// >
//   Verify OTP
// </button>
//           </>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-400 mb-2">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter new password"
//                 className="input-field"
//                 onChange={(e) => setNewPassword(e.target.value)}
//               />
//             </div>

//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-400 mb-2">
//                 Confirm New Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Confirm new password"
//                 className="input-field"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>

//             <button
//               className="btn-primary w-full py-3 mt-6"
//               onClick={handleReset}
//             >
//               Reset Password
//             </button>
//           </>
//         )}

//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;


// =========the above code is working with otp verification but failing while resetting the password



import React, { useState, useEffect } from "react";
import { forgotPassword, resetPassword, verifyOtp } from "./api/authApi";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // STEP 1 - SEND OTP
  const sendOtp = async () => {

    if (!email) {
      alert("Please enter email");
      return;
    }

    const message = await forgotPassword(email);
    alert(message);

    if (message.toLowerCase().includes("otp sent")) {
      setStep(2);
    }
  };

  // STEP 2 - VERIFY OTP
  const handleVerifyOtp = async () => {

    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    const message = await verifyOtp({ email, otp });

    if (message.toLowerCase().includes("invalid")) {
      alert("Invalid OTP");
      return;
    }

    // OTP correct → go to password reset
    setStep(3);
  };

  // STEP 3 - RESET PASSWORD
  const handleReset = async () => {

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const message = await resetPassword({
      email,
      otp,
      newPassword
    });

    alert(message);

    if (message.toLowerCase().includes("successful")) {
      navigate("/");
    }
  };

  return (
    <div className="modal-overlay active">
      <div className="modal">

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Forgot Password</h3>
          <button
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => navigate("/")}
          >
            ✕
          </button>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Registered Email
              </label>
              <input
                type="email"
                placeholder="Enter your registered email"
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              className="btn-primary w-full py-3 mt-6"
              onClick={sendOtp}
            >
              Send OTP
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="Enter OTP"
                className="input-field"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button
              className="btn-primary w-full py-3 mt-6"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="input-field"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="input-field"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              className="btn-primary w-full py-3 mt-6"
              onClick={handleReset}
            >
              Reset Password
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default ForgotPassword;