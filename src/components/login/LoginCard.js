import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Box,
  Card,
  Alert,
  Typography,
} from "@mui/material";

const departments = ["Accounts", "Sales", "HR"];

const LoginCard = ({ onLogin, onForgotPassword }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [department, setDepartment] = useState("Accounts");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errMsg = onLogin(credentials.username, credentials.password);
    if (errMsg) setError(errMsg);
  };

  return (
    <Card sx={{ padding: 3 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          select
          label="Department"
          fullWidth
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          sx={{ mb: 2 }}
        >
          {departments.map((dept) => (
            <MenuItem key={dept} value={dept}>
              {dept}
            </MenuItem>
          ))}
        </TextField>

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
          label="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          margin="normal"
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
            label="Remember password"
          />
          <Typography
            variant="body2"
            sx={{ color: "#007BFF", cursor: "pointer" }}
            onClick={onForgotPassword} // <-- Ensure this calls the prop function
          >
            Forgot password?
          </Typography>
        </Box>

        <Button type="submit" variant="contained" fullWidth sx={{ height: "45px", bgcolor: "#007BFF" }}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginCard;
