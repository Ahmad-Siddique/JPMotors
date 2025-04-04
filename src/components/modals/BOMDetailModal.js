import React from "react";
import { Box, TextField, Button, Divider } from "@mui/material";
import { Delete as DeleteIcon, CleaningServices as BrushIcon } from "@mui/icons-material";
import CustomModal from "./CustomModal";
import DataTable from "../common/DataTable";
import { SaveButton, AddToBasketButton } from "../buttons/ButtonComponents";

const columns = [
    { id: "id", label: "No." },
    { id: "designation", label: "Designation Article", type: "link" },
    { id: "qty", label: "Qty" },
    { id: "unitPrice", label: "Prix Unit" },
    { id: "totalPrice", label: "Prix Total" },
    { id: "reqQty", label: "Req Qty" },
    { id: "stockQty", label: "Stock Qty" }
];

const rows = [
    { id: 1, designation: "FORCEIONE BATTERIE", qty: "BATTERIE", unitPrice: "//", totalPrice: "01", reqQty: "38.56", stockQty: "229736.65" },
    { id: 2, designation: "FORCEIONE BATTERIE", qty: "BATTERIE", unitPrice: "//", totalPrice: "01", reqQty: "38.56", stockQty: "229736.65" },
    { id: 3, designation: "FORCEIONE BATTERIE", qty: "BATTERIE", unitPrice: "//", totalPrice: "01", reqQty: "38.56", stockQty: "229736.65" }
];

const BOMDetailModal = ({ open, onClose }) => {
    return (
        <CustomModal open={open} onClose={onClose} title="BOM Details" height="700px" width="900px">
            <Box display="flex" flexDirection="column" gap={2}>
                {/* Data Table */}
                <DataTable columns={columns} rows={rows} pageSize={3} onLinkClick={(value) => console.log("Clicked:", value)} />

                {/* Quantity & Unit Cost with Delete Button */}
                <Box display="flex" gap={1} alignItems="center">
                    <Button variant="contained" color="error" size="large">
                        <DeleteIcon />
                    </Button>
                    <TextField fullWidth label="Quantity" size="small" defaultValue="---" variant="filled" />
                    <TextField fullWidth label="Unit Cost" size="small" defaultValue="---" variant="filled" />
                </Box>

                {/* Divider */}
                <Divider variant="middle" />

                {/* Article and Pricing Details */}
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                    <TextField fullWidth label="Article" variant="outlined" />
                    <TextField fullWidth label="Quantity" variant="outlined" />
                    <TextField fullWidth label="Price Total / Brut" variant="outlined" />
                    <TextField fullWidth label="Price Unit" variant="outlined" />
                    <TextField fullWidth label="Discount in %" variant="outlined" />
                    <TextField fullWidth label="Discount Amount" variant="outlined" />
                    <TextField fullWidth label="Price Total" variant="outlined" />
                </Box>

                {/* Clear and Add to Basket Buttons */}
                <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button variant="outlined" color="error" startIcon={<BrushIcon />}>Clear</Button>
                    <AddToBasketButton />
                </Box>
            </Box>
        </CustomModal>
    );
};

export default BOMDetailModal;
