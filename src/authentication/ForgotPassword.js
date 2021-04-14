import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instruction");
    } catch {
      setError("Fail to reset password");
    }

    setLoading(false);
  }

  return (
    <div className='login-background'>
      <div className='login-box card'>
        <h1>Password Reset</h1>
        {error && (
          <div class='alert'>
            <h5>{error}</h5>
          </div>
        )}

        {message && (
          <div class='alert'>
            <h5>{message}</h5>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className='textbox'>
            <i class='fas fa-user'></i>
            <input type='text' ref={emailRef} required placeholder='Username' />
          </div>

          <button class='btn' disabled={loading} type='submit'>
            Reset Password
          </button>
        </form>
        <div className='forgot-password'>
          <Link to='/login'>
            <li>Login</li>
          </Link>
        </div>
        <div className='details'>
          Need an account?{" "}
          <Link to='/login'>
            <li>SignUp</li>
          </Link>
        </div>
      </div>
    </div>
  );
}
