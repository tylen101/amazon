import React, { useState } from 'react';
import '../CSS/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.target.type === 'text'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const hadleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => handleChange(e)} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <button className="login__signInButton" onClick={hadleSignIn}>
            Sign-In
          </button>
        </form>
        <p>
          By continuing, you agree to this fake Amazon's non-existent Conditions
          of Use and Privacy Notice.
        </p>
        <button className="login__registerButton" onClick={handleCreate}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
