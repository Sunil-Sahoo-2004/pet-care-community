import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import { assets } from "../../assets/assets";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.role !== "admin") {
        setError("Access denied: Admins only");
        return;
      }

      Cookies.set("adminToken", data.token, { expires: 1 });
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url('${assets.AdminBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login Admin</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input type="text" name="name" placeholder="Enter your name" required />
        <input
          type="email"
          name="email"
          placeholder="example.email@gmail.com"
          required
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter at least 8+ characters"
            required
          />
          <span className="toggle-icon" onClick={togglePassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="checkbox">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            By signing up, I agree with the <a href="#">Terms of Use</a> &{" "}
            <a href="#">Privacy Policy</a>
          </label>
        </div>

        <button type="submit" className="signup-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
