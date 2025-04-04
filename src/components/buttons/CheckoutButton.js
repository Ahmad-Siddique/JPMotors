import React from "react";
import { Box, Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CheckoutButton = ({ onClick, badgeCount = 2 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: 3,
        padding: "6px 12px", // Reduced padding to match other buttons
        cursor: "pointer",
        height: "40px", // Match height of other buttons
        "&:hover": { boxShadow: 5 },
      }}
      onClick={onClick}
    >
      {/* Green Icon with Badge */}
      <Box
        sx={{
          position: "relative",
          width: "32px", // Reduced width
          height: "32px", // Reduced height
          backgroundColor: "#4CAF50",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "8px",
        }}
      >
        {/* Red Badge */}
        <Badge
          badgeContent={badgeCount}
          color="error"
          sx={{
            position: "absolute",
            top: "-5px",
            left: "-5px",
            "& .MuiBadge-badge": {
              fontSize: "10px",
              fontWeight: "bold",
              padding: "4px",
            },
          }}
        />
        
        {/* Shopping Cart Icon with Add Symbol */}
        <ShoppingCartIcon sx={{ fontSize: "20px", color: "white" }} />
        <AddCircleIcon
          sx={{
            position: "absolute",
            fontSize: "12px",
            color: "white",
            right: "3px",
            bottom: "3px",
          }}
        />
      </Box>

      {/* Checkout Text */}
      <Typography variant="body2" color="#4CAF50" fontWeight="bold">
        Checkout
      </Typography>
    </Box>
  );
};

export default CheckoutButton;
