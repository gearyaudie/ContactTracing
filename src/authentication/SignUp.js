import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const [conPasswordShown, setConPasswordShown] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Fail to Create Account");
    }

    setLoading(false);
  }

  // Toggle Password Visibility
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // Toggle Confirm Password Visibility
  const toggleConPasswordVisibility = () => {
    setConPasswordShown(conPasswordShown ? false : true);
  };

  return (
    <div className='login-background'>
      <div className='login-box card'>
        <h1>Sign Up</h1>
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
          <div className='textbox'>
            <i class='fas fa-lock'></i>
            <input
              type={conPasswordShown ? "text" : "password"}
              ref={passwordConfirmRef}
              required
              placeholder='Confirm Password'
            />
            <i class='fas fa-eye' onClick={toggleConPasswordVisibility}></i>
          </div>
          <button class='btn' disabled={loading} type='submit'>
            Sign Up
          </button>
        </form>
        <div className='details'>
          Already have an account?{" "}
          <Link to='/login'>
            <li>Login</li>
          </Link>
        </div>
      </div>
    </div>
  );
}
