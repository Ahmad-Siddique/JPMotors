import React, { useState } from "react";
import { TextField, Button, Card, Typography, Box } from "@mui/material";

const ForgotPassword = ({ onBack }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    alert("Password reset request submitted!");
    onBack(); // Switch back to login after submission
  };

  return (
    <Card sx={{ padding: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Reset Your Password
      </Typography>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="New Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={credentials.confirmPassword}
          onChange={handleChange}
          margin="normal"
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Request Reset
        </Button>
      </form>

      <Box textAlign="center" sx={{ mt: 2, cursor: "pointer", color: "#007BFF" }} onClick={onBack}>
        Back to Login
      </Box>
    </Card>
  );
};

export default ForgotPassword;
