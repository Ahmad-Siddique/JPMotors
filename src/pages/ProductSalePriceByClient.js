import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setHeaderCard } from "../store/actions/headerCardActions";
import HeaderCard from "../components/common/HeaderCard";
import ArticleDetail from "../components/common/ArticleDetail";
import PriceDetail from "../components/common/PriceDetail";
import EmplacementQuantityDetail from "../components/common/EmplacementQuantityDetail";
import {
  ModifyButton,
  ChangeConvRateButton,
  HistoryButton,
  InformationSurCommandeButton,
  CancelButton,
  SaveButton,
} from "../components/buttons/ButtonComponents";
import ChangeConversionRateModal from "../components/modals/ChangeConversionRateModal";
import MainScreen from "../components/productsaleprice/MainScreen";

const ProductSalePrice = () => {
  const dispatch = useDispatch();
  const [openConvRateModal, setOpenConvRateModal] = useState(false);

  useEffect(() => {
    dispatch(
      setHeaderCard(
        "Product Sale Price",
        "Find your desired products",
        ["File", "Product Sale Price"]
      )
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

export default ProductSalePrice;
