import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import CustomModal from "./CustomModal";
import { ViewReport } from "../buttons/ButtonComponents";

const ImpressionHistoryModal = ({ open, onClose }) => {
    const [fromDate, setFromDate] = useState(dayjs());
    const [toDate, setToDate] = useState(dayjs());

    return (
        <CustomModal open={open} onClose={onClose} title="Select Date For Report" width="500px">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box display="flex" flexDirection="column" gap={2} mt={1}>

                    {/* Report Date From */}
                    <Box>
                        <Typography fontSize="14px" fontWeight="500" mb={0.5}>Report Date From</Typography>
                        <DatePicker
                            value={fromDate}
                            onChange={setFromDate}
                            format="DD/MM/YYYY"
                            slotProps={{ textField: { fullWidth: true, size: "small" } }}
                        />
                    </Box>

                    {/* Report Date To */}
                    <Box>
                        <Typography fontSize="14px" fontWeight="500" mb={0.5}>Report Date To</Typography>
                        <DatePicker
                            value={toDate}
                            onChange={setToDate}
                            format="DD/MM/YYYY"
                            slotProps={{ textField: { fullWidth: true, size: "small" } }}
                        />
                    </Box>

                    <Box display="flex" justifyContent="flex-end">
                        <ViewReport />
                    </Box>


                </Box>
            </LocalizationProvider>
        </CustomModal>
    );
};

export default ImpressionHistoryModal;
