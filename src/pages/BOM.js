import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";

import MainBOM from "../components/bom/MainScreen";
import { Box } from "@mui/material";

const BOM = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(
      setHeaderCard("BOM", "Find your desired products", [
        "File",
        "BOM",
      ])
    );
  }, [dispatch]);

  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <HeaderCard />
        <MainBOM />
      </Box>
    </LocalizationProvider>
  );
};

export default BOM;
