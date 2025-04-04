import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import CustomModal from "./CustomModal";

const AddEtage = ({ open, onClose }) => {
    const [rayon, setRayon] = useState("");
    const [etagere, setEtagere] = useState("");
    const [casier, setCasier] = useState("");

    const handleAdd = () => {
        console.log("Rayon:", rayon);
        console.log("Etagère:", etagere);
        console.log("Casier:", casier);
        onClose();
    };

    return (
        <CustomModal open={open} onClose={onClose} title="Etage" width="400px">
            <Box display="flex" flexDirection="column" gap={2} mt={1}>

                <Typography variant="h6" fontWeight="bold">Gross Position</Typography>

                {/* Rayon Input */}
                <TextField
                    label="Rayon"
                    placeholder="--"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={rayon}
                    onChange={(e) => setRayon(e.target.value)}
                />

                {/* Etagère Input */}
                <TextField
                    label="Etagère"
                    placeholder="--"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={etagere}
                    onChange={(e) => setEtagere(e.target.value)}
                />

                {/* Casier Input */}
                <TextField
                    label="Casier"
                    placeholder="--"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={casier}
                    onChange={(e) => setCasier(e.target.value)}
                />

                {/* Action Buttons */}
                <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button variant="contained" color="primary" onClick={handleAdd}>+ Add</Button>
                    <Button variant="contained" color="inherit" onClick={onClose}>Cancel</Button>
                </Box>

            </Box>
        </CustomModal>
    );
};

export default AddEtage;
