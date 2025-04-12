import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";

import MainScreen from "../components/askproductprice/MainScreen";

const AskProductPrice = () => {
  const dispatch = useDispatch();
  const [openConvRateModal, setOpenConvRateModal] = useState(false);

  useEffect(() => {
    dispatch(
      setHeaderCard("Demade de Prix", "Find your desired products", [
        "File",
        "Ask Product Price",
      ])
    );
  }, [dispatch]);

  const handleOpenConvRateModal = () => {
    setOpenConvRateModal(true);
  };

  const handleCloseConvRateModal = () => {
    setOpenConvRateModal(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <HeaderCard />
        <MainScreen />
      </Box>
    </LocalizationProvider>
  );
};

export default AskProductPrice;
