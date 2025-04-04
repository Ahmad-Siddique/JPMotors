import React, { useState } from "react";
import { Box,TextField ,RadioGroup, FormControlLabel, Radio, Button, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import CustomModal from "./CustomModal";
import CreateKitModal from "./CreateKitModal"; // Import new modal
import { SaveButton } from "../buttons/ButtonComponents";

const RegularizationModal = ({ open, onClose, productCode }) => {
  const [openCreateKit, setOpenCreateKit] = useState(false);
  const [movementDate, setMovementDate] = useState(dayjs());

  const handleCreateKit = () => {
    onClose(); // Close RegularizationModal
    setOpenCreateKit(true); // Open CreateKitModal
  };

  return (
    <>
      <CustomModal open={open} onClose={onClose} title="Regularisation des stocks Mouvement" height="500px" width="600px">
        <Box display="flex" flexDirection="column" gap={2}>

          {/* Product Code */}
          <Typography>
            Product Code: <Typography component="span" color="primary" fontWeight="bold">{productCode}</Typography>
          </Typography>

          {/* Date Movement (Updated with MUI DatePicker) */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
              <Typography fontSize="14px" fontWeight="500" mb={0.5}>Date Mouvement</Typography>
              <DatePicker
                value={movementDate}
                onChange={setMovementDate}
                format="DD/MM/YYYY"
                slotProps={{ textField: { fullWidth: true, size: "small" } }}
              />
            </Box>
          </LocalizationProvider>

          {/* Quantity & Stock Quantity */}
          <Box display="flex" gap={2}>
            <TextField fullWidth label="Quantity" type="number" defaultValue="0.00" />
            <TextField fullWidth label="Stock Quantity" type="number" defaultValue="0" />
          </Box>

          {/* Radio Buttons */}
          <RadioGroup row defaultValue="entries">
            <FormControlLabel value="entries" control={<Radio />} label="Entrées [E]" />
            <FormControlLabel value="stories" control={<Radio />} label="Stories [S]" />
          </RadioGroup>

          {/* Movement Label */}
          <TextField fullWidth label="Libelle du mouvement" placeholder="Search Here" />

          {/* Footer Buttons */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button variant="outlined" startIcon={<span>➕</span>} onClick={handleCreateKit}>Create Kit</Button>
            <SaveButton />
          </Box>

        </Box>
      </CustomModal>

      {/* Create Kit Modal */}
      <CreateKitModal open={openCreateKit} onClose={() => setOpenCreateKit(false)} />
    </>
  );
};

export default RegularizationModal;
