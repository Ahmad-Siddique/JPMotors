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
import MainArticle from "../components/article-wholesale/MainScreen";

const ArticleWholeSale = () => {
  const dispatch = useDispatch();
  const [openConvRateModal, setOpenConvRateModal] = useState(false);

  useEffect(() => {
    dispatch(
      setHeaderCard("Article Whole Sale", "Find your desired products", [
        "File",
        "Article List",
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
        <MainArticle />
      </Box>
    </LocalizationProvider>
  );
};

export default ArticleWholeSale;
