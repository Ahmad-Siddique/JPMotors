import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Footer = () => {
  // Selecting status data from Redux store with initial values
  const status = useSelector((state) => state.status) || {
    timeUsed: "0.05",
    totalArticles: 51,
    usd: "0.00",
    cf: "0.00",
    date: "24/2/2025",
  };

  return (
    <Box
      sx={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        bgcolor: "white",
        borderTop: "1px solid #ddd",
        position: "fixed",
        bottom: 0,
        left: 250, // Adjust to match sidebar width
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Status Info */}
      <Typography variant="body2" color="textSecondary">
        <strong>STATUS:</strong> Temps utilisé {status.timeUsed} Sec | Total articles sélectionnés {status.totalArticles} | USD {status.usd} | CF {status.cf} | {status.date}
      </Typography>
      
      {/* Copyright Info */}
      <Typography variant="body2" color="textSecondary">
        Copyright 2025 © JMotors By <strong>WaamTech</strong>
      </Typography>
    </Box>
  );
};

export default Footer;
