import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";
import { Box } from "@mui/material";

import TaxDeductionScreen from "../components/Tax-Deductions/TaxDeduction";


const TaxDeduction = () => {
  const dispatch = useDispatch();
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    dispatch(
      setHeaderCard("Tax Deduction (TVA Recuperer)", "Find Below the Tax details", ["File", "Tax Deduction"])
    );
  }, [dispatch]);
  return (
    <Box>
      <HeaderCard />
      <TaxDeductionScreen />
    </Box>
  );
};

export default TaxDeduction;
