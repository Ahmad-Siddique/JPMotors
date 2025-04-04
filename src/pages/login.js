import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginImage from "../resources/images/login/LoginScreenImage.png";
import Logo from "../resources/images/login/logo.png";
import { Box, Typography } from "@mui/material";
import LoginCard from "../components/login/LoginCard";
import ForgotPassword from "../components/login/ForgotPassword";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (username, password) => {
    if (login(username, password)) {
      navigate("/");
    } else {
      return "Invalid username or password";
    }
  };

  return (
    <Box display="flex" height="100%" width="100%">
      {/* Left Side - Illustration */}
      <Box flex={1} display="flex" alignItems="center" justifyContent="center" bgcolor="#F5F6F8">
        <img src={LoginImage} alt="Illustration" width="70%" />
      </Box>

      {/* Right Side - Login Form */}
      <Box width="30%" p={4} display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Hi, Welcome back
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
          Sign in to your account to continue
        </Typography>

        {/* Company Logo */}
        <Box sx={{ mb: 2 }}>
          <img src={Logo} alt="Company Logo" width="120px" />
        </Box>

        {/* Toggle Between Login and Forgot Password */}
        {showForgotPassword ? (
          <ForgotPassword onBack={() => setShowForgotPassword(false)} />
        ) : (
          <LoginCard onLogin={handleLogin} onForgotPassword={() => setShowForgotPassword(true)} />
        )}

        {/* Footer */}
        <Typography variant="body2" sx={{ textAlign: "center", mt: 2, color: "#007BFF", cursor: "pointer" }}>
          Need Help?
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center", mt: 2, color: "gray" }}>
          Copyright 2025 © JMotors By WaamTech
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;