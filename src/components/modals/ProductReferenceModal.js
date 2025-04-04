import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomModal from "./CustomModal";
import ProductTable from "../common/ProductListTable";
import TableCardHeader from "../common/TableCardHeader";
import AddToBasketButton from "../buttons/AddToBasketButton";
import { ModifyButton } from "../buttons/ButtonComponents";

const ProductReferenceModal = ({ open, onClose, productCode }) => {
  const [currentProduct, setCurrentProduct] = useState(productCode);

  const handleNext = () => {
    setCurrentProduct((prev) => prev + 1); // Replace with real logic
  };

  const handlePrevious = () => {
    setCurrentProduct((prev) => prev - 1); // Replace with real logic
  };

  return (
    <CustomModal open={open} onClose={onClose} title="Product Reference" width="800px">
      {/* Header */}
      <TableCardHeader title="SB-3642 : ROTULE SUSP INFER" description="Search your product references in the list" />

      {/* Product Table */}
      <ProductTable />

      {/* Footer Actions */}
      <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
        {/* Left Side: Previous & Next Buttons */}
        <Box>
          <Button onClick={handlePrevious} startIcon={<ArrowBackIcon />} disabled={currentProduct <= 1}>
            Previous
          </Button>
          <Button onClick={handleNext} endIcon={<ArrowForwardIcon />} sx={{ marginLeft: 2 }}>
            Next
          </Button>
        </Box>

        {/* Right Side: Modify & Add to Basket Buttons */}
        <Box display="flex" gap={2}>
          <ModifyButton />
          <AddToBasketButton onClick={() => alert("Added to Basket!")} />
        </Box>
      </Box>
    </CustomModal>
  );
};

export default ProductReferenceModal;
