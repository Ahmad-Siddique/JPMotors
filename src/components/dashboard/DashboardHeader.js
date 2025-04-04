import React from "react";
import { Typography, Box } from "@mui/material";

const DashboardHeader = ({ title, description }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </Box>
  );
};

export default DashboardHeader;