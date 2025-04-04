import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import DataTable from "../common/DataTable";
import { SaveButton } from "../buttons/ButtonComponents";


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

const CreateKitModal = ({ open, onClose }) => {
    return (
        <CustomModal open={open} onClose={onClose} title="Create Kit" height="600px" width="800px">
            <Box display="flex" flexDirection="column" gap={2}>

                {/* Product Name */}
                <TextField fullWidth label="Product Name" size="small"/>

                {/* Quantity & Unit Cost */}
                <Box display="flex" gap={2}>
                    <TextField fullWidth label="Quantity" type="number" defaultValue="0.00" size="small"/>
                    <TextField fullWidth label="Unit Cost" type="number" defaultValue="0" size="small"/>
                </Box>

                {/* Note */}
                <TextField fullWidth label="Note" placeholder="Type here" multiline rows={2} />

                {/* Data Table */}
                <DataTable columns={columns} rows={rows} pageSize = {2} onLinkClick={(value) => console.log("Clicked:", value)} />

                {/* Footer Button */}

            </Box>
            <Box display="flex" justifyContent="flex-end" mt={2}>
                <SaveButton />
            </Box>
        </CustomModal>
    );
};

export default CreateKitModal;
