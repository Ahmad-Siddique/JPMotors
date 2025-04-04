import React, { useState } from "react";
import { Box, Button, Checkbox, List, ListItem, ListItemText, Dialog } from "@mui/material";
import CustomModal from "./CustomModal";
import { ProceedButton, DeleteButton } from "../buttons/ButtonComponents";

const CartModal = ({ open, onClose, cartItems }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    if (!cartItems) return null; // Ensure cartItems exists

    const handleToggle = (productId) => {
        setSelectedItems((prev) =>
            prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
        );
    };

    const handleSelectAll = () => {
        if (selectedItems.length === cartItems.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cartItems.map((item) => item.id));
        }
    };

    return (

        <CustomModal open={open} onClose={onClose} title="Cart Items" width="800px">
            {/* List with a fixed height and scrollable if more than 4 items */}
            <Box sx={{ maxHeight: 240, overflowY: "auto" }}>
                <List>
                    {cartItems.map((item) => (
                        <ListItem key={item.id} sx={{ borderBottom: "1px solid #ddd" }}>
                            <Checkbox checked={selectedItems.includes(item.id)} onChange={() => handleToggle(item.id)} />
                            <ListItemText primary={item.productCode} secondary={`ID: ${item.id}`} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Footer Buttons */}
            <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
                <Button onClick={handleSelectAll}>Select All</Button>
                <Box display="flex" gap={2}>
                    <DeleteButton />
                    <ProceedButton />
                </Box>
            </Box>
        </CustomModal>
    );
};

export default CartModal;
