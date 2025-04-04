import React, { useState } from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import DataTable from "../common/DataTable";
import { ModifyButton, InsertButton } from "../buttons/ButtonComponents";
import AddCurrencyDetailsModal from "./AddCurrencyDetailsModal";

const columns = [
    { id: "currency", label: "Currency" },
    { id: "description", label: "Description", type: "link" },
    { id: "rate", label: "Rate" },
    { id: "rateLocale", label: "Rate Locale" },
    { id: "rateImport", label: "Rate Import" },
];

const rows = [
    { id: 1, currency: "CDF", description: "FRANCS CONGOLAIS", rate: "3,050.00000000", rateLocale: "3,050.00000000", rateImport: "2,950.00000000" },
    { id: 2, currency: "USD", description: "DOLLARS AMERICAINS", rate: "1.00000000", rateLocale: "1.00000000", rateImport: "1.00000000" },
    { id: 3, currency: "EUR", description: "EURO", rate: "1.00000000", rateLocale: "1.00000000", rateImport: "0.00000000" },
];

const ChangeConversionRateModal = ({ open, onClose }) => {
    const [openAddCurrencyModal, setOpenAddCurrencyModal] = useState(false);

    const handleOpenAddCurrencyModal = () => {
        setOpenAddCurrencyModal(true);
    };

    const handleCloseAddCurrencyModal = () => {
        setOpenAddCurrencyModal(false);
    };

    return (
        <>
            <CustomModal open={open} onClose={onClose} title="Change Conversion Rate">
                <Box display="flex" flexDirection="column" gap={2}>
                    {/* Data Table */}
                    <DataTable columns={columns} rows={rows} pageSize={3} onLinkClick={(value) => console.log("Clicked:", value)} />

                    {/* Checkbox */}
                    <Box display="flex" alignItems="center" gap={1} mt={2}>
                        <Checkbox />
                        <Typography>Vision deviscode supremers</Typography>
                    </Box>

                    {/* Action Buttons */}
                    <Box display="flex" justifyContent="flex-end" gap={1}>
                        <InsertButton onClick={handleOpenAddCurrencyModal} />
                        <ModifyButton />
                    </Box>
                </Box>
            </CustomModal>

            {/* Add Currency Details Modal */}
            <AddCurrencyDetailsModal open={openAddCurrencyModal} onClose={handleCloseAddCurrencyModal} />
        </>
    );
};

export default ChangeConversionRateModal;
