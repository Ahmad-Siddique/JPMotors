import React, { useState } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import CustomModal from "./CustomModal";
import DataTable from "../common/DataTable";
import { ChartButton, ImpressionHistoryButton } from "../buttons/ButtonComponents";
import ChartModal from "./ChartModal";
import ImpressionHistoryModal from "./ImpressionHistoryModal";
const columns = [
  { id: "id", label: "ID" },
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  { id: "description", label: "Description" },
  { id: "type", label: "Type" },
  { id: "opQte", label: "Op Qte" },
  { id: "qte", label: "Qte" },
  { id: "bal", label: "Bal" },
  { id: "utiliser", label: "Utiliser" },
];

const rows = [
  { id: 1, date: "", time: "", description: "FORCEIONE BATTERIE", type: "BATTERIE", opQte: "//", qte: "01", bal: "38.56", utiliser: "229736.65" },
  { id: 2, date: "", time: "", description: "FORCEIONE BATTERIE", type: "BATTERIE", opQte: "//", qte: "01", bal: "38.56", utiliser: "229736.65" },
  { id: 3, date: "", time: "", description: "FORCEIONE BATTERIE", type: "BATTERIE", opQte: "//", qte: "01", bal: "38.56", utiliser: "229736.65" },
];

const HistoryModal = ({ open, onClose, productCode }) => {
  const [chartModalOpen, setChartModalOpen] = useState(false);
  const [impressionModalOpen, setImpressionModalOpen] = useState(false);

  const handleOpenChart = () => {
    setChartModalOpen(true);
    onClose(); // Close History Modal
  };
  const handleOpenImpressionHistory = () => {
    setImpressionModalOpen(true);
    onClose(); // Close History Modal
  };

  return (
    <>
      <CustomModal open={open} onClose={onClose} title="Article History" height="600px" width="900px">
        <Box display="flex" flexDirection="column" gap={2}>
          
          {/* Product Code */}
          <Typography variant="h6" color="green" fontWeight="bold">
            {productCode} : ROTULE BRAS SUPER
          </Typography>

          {/* Data Table */}
          <DataTable columns={columns} rows={rows} onLinkClick={(value) => console.log("Clicked:", value)} />

          {/* Footer Buttons */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            {/* Left Side - Buttons */}
            <Box display="flex" gap={2}>
              <ChartButton onClick={handleOpenChart} />
              <ImpressionHistoryButton onClick={handleOpenImpressionHistory}/>
            </Box>

            {/* Right Side - Checkbox */}
            <Box display="flex" alignItems="center">
              <Checkbox />
              <Typography>Show All History</Typography>
            </Box>
          </Box>
        </Box>
      </CustomModal>

      {/* Chart Modal */}
      <ChartModal open={chartModalOpen} onClose={() => setChartModalOpen(false)} />
      <ImpressionHistoryModal open={impressionModalOpen} onClose={() => setImpressionModalOpen(false)} />
    </>
  );
};

export default HistoryModal;
