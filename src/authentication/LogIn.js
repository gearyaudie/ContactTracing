import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Fail to Log In");
    }

    setLoading(false);
  }

  // Toggle Password Visibility
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className='login-background'>
      <div className='login-box card'>
        <h1>Login</h1>
        {error && (
          <div class='alert'>
            <h5>{error}</h5>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className='textbox'>
            <i class='fas fa-user'></i>
            <input type='text' ref={emailRef} required placeholder='Username' />
          </div>
          <div className='textbox'>
            <i class='fas fa-lock'></i>
            <input
              type={passwordShown ? "text" : "password"}
              ref={passwordRef}
              required
              placeholder='Password'
            />
            <i class='fas fa-eye' onClick={togglePasswordVisiblity}></i>
          </div>
          <button class='btn' disabled={loading} type='submit'>
            Log In
          </button>
        </form>
        <div className='forgot-password'>
          <Link to='/forgot-password'>
            <li>Forgot Password?</li>
          </Link>
        </div>
        <div className='details'>
          Need an Account?{" "}
          <Link to='/signup'>
            <li>Sign Up</li>
          </Link>
        </div>
      </div>
    </div>
  );
}
