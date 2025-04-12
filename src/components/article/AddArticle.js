import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setHeaderCard } from "../../store/actions/headerCardActions";
import HeaderCard from "../common/HeaderCard";
import ArticleDetail from "../common/ArticleDetail";
import PriceDetail from "../common/PriceDetail";
import EmplacementQuantityDetail from "../common/EmplacementQuantityDetail";
import {
  ModifyButton,
  ChangeConvRateButton,
  HistoryButton,
  InformationSurCommandeButton,
  CancelButton,
  SaveButton
} from "../buttons/ButtonComponents";
import ChangeConversionRateModal from "../modals/ChangeConversionRateModal";

const AddArticle = () => {
  const dispatch = useDispatch();
  const [openConvRateModal, setOpenConvRateModal] = useState(false);

  useEffect(() => {
    dispatch(
      setHeaderCard(
        "Article(INSERT)",
        "Add your new article details",
        ["File", "Add Article"]
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
        <ArticleDetail />
        <PriceDetail />
        <EmplacementQuantityDetail />
        <Box display="flex" justifyContent="space-between" padding="16px" backgroundColor="#f5f5f5">
          <Box display="flex" gap="8px">
            <ModifyButton />
            <ChangeConvRateButton onClick={handleOpenConvRateModal} />
            <HistoryButton />
            <InformationSurCommandeButton />
          </Box>
          <Box display="flex" gap="8px">
            <CancelButton />
            <SaveButton />
          </Box>
        </Box>

        {/* Change Conversion Rate Modal */}
        <ChangeConversionRateModal open={openConvRateModal} onClose={handleCloseConvRateModal} />
      </Box>
    </LocalizationProvider>
  );
};

export default AddArticle;
