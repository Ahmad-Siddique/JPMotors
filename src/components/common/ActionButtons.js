import React, { useState } from "react";
import { Box } from "@mui/material";
import { AddArticleButton, ModifyButton, RegularisationButton, HistoryButton, ReferencesButton } from "../buttons/ButtonComponents";
import RegularizationModal from "../modals/RegularizationModal";
import HistoryModal from "../modals/HistoryModal";

const ActionButtons = () => {
  const [regularizationModalOpen, setRegularizationModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <AddArticleButton />
        <ModifyButton />
        <RegularisationButton onClick={() => setRegularizationModalOpen(true)} />
        <HistoryButton onClick={() => setHistoryModalOpen(true)} />
        <ReferencesButton />
      </Box>

      {/* Regularization Modal */}
      <RegularizationModal open={regularizationModalOpen} onClose={() => setRegularizationModalOpen(false)} productCode="SB-3881" />

      {/* History Modal */}
      <HistoryModal open={historyModalOpen} onClose={() => setHistoryModalOpen(false)} productCode="SB-3881" />
    </>
  );
};

export default ActionButtons;
