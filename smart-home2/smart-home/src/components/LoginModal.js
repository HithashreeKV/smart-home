import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {

const navigate = useNavigate();
  useEffect(() => {

    if (isOpen)
      document.body.style.overflow = "hidden";

    return () =>
      document.body.style.overflow = "";

  }, [isOpen]);

const handleLogin = async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const result = await loginUser({ email, password });

    if (typeof result === 'string') {
      alert(result);
      return;
    }

    // got user object
    try { localStorage.setItem('userProfile', JSON.stringify(result)); } catch {}
    // close modal then navigate
    onClose();
    navigate("/dashboard");
    alert("Login successful!");

  } catch (error) {
    alert("Server error");
  }
};


  return (

    <div className={`modal-overlay ${isOpen ? "active" : ""}`}>

      <div className="modal">


        <h3 className="text-2xl font-bold">Login</h3>


        <form onSubmit={handleLogin}>


          <br></br>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="input-field" placeholder="Enter your email" required />
          </div>
          <br></br>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input type="password" id="password" name="password" className="input-field" placeholder="Enter your password" required />
          </div>

          {/* <p
  style={{ cursor: "pointer", color: "lightblue" }}
  onClick={() => navigate("/forgot-password")}
>
  Forgot Password?
</p> */}

<p
  style={{ cursor: "pointer", color: "lightblue" }}
  onClick={() => {
    onClose();              // Close login modal first
    navigate("/forgot-password");   // Then navigate
  }}
>
  Forgot Password?
</p>

          <br></br>
          
          <button type="submit" className="btn-primary w-full py-3 mt-6">
            Login
          </button>


        </form>

        <p className="text-center text-gray-400 text-sm mt-6">New User?

  <span
    onClick={onSwitchToSignup}
    className="text-emerald-400 hover:text-emerald-300 font-medium ml-1 cursor-pointer"
  >
    Sign up
  </span>

</p>

      </div>

    </div>

  );

};

export default LoginModal;