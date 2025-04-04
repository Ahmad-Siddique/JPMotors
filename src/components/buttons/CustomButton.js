import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ icon, label, onClick, color = "primary" }) => {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      onClick={onClick}
      color={color}
      sx={{
        margin: "4px",
        padding: "8px 16px",
        textTransform: "none",
        borderRadius: "8px",
        backgroundColor: "#979797",
        color: "white",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "white",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
