import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css"; // Add your CSS file here for styling

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    if (username !== "emilys") {
      setErrorMessage("Invalid username.");
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setErrorMessage("Invalid email format.");
      return false;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          username: "emilys",
          password: password,
          email: email,
        });

        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/home"); // Redirect to home page
      } catch (error) {
        setErrorMessage("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://fascinating-sorbet-2ee121.netlify.app/Illustration.png" // Replace with your image path
          alt="Login Illustration"
          className="login-illustration"
        />
      </div>
      <div className="login-right">
        <h2>
          Welcome to <span className="brand-name">Unstop</span>
        </h2>
        <button className="social-login google-login">
          <img
            src="https://fascinating-sorbet-2ee121.netlify.app/search%201.png"
            alt="google"
          />
          Login with Google
        </button>
        <button className="social-login facebook-login">
          <img
            src="https://fascinating-sorbet-2ee121.netlify.app/facebook.png"
            alt="facebook"
          />
          Login with Facebook
        </button>
        <div className="divider">
          <span>OR</span>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">User name</label>
            <input
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-me">
            <div className="check_box">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label>Remember Me</label>
            </div>
            <Link href="#" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="footer-links">
          <span>
            Don’t have an account?{" "}
            <Link href="#" className="register-link">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
