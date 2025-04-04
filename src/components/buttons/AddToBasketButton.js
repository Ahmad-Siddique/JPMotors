import React from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddToBasketButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      onClick={onClick}
      sx={{
        backgroundColor: "#50C800",
        color: "white",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "8px 16px",
        "&:hover": { backgroundColor: "#45A049" },
      }}
    >
      Add To Basket
    </Button>
  );
};

export default AddToBasketButton;
