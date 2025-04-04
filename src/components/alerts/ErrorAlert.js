import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const AlertComponent = ({ message }) => {
  return (
    <Alert severity="error" sx={{ mb: 2 }}>
      <AlertTitle>Invalid</AlertTitle>
      {message}
    </Alert>
  );
};

export default AlertComponent;
