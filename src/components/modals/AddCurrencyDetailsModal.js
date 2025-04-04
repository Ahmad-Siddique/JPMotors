import React from "react";
import { Box, Button, TextField, Checkbox, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import CustomModal from "./CustomModal";
import {SaveButton} from "../buttons/ButtonComponents";
const AddCurrencyDetailsModal = ({ open, onClose }) => {
    return (
        <CustomModal open={open} onClose={onClose} title="Currency Details (ADD)" height="600px" width="600px">
            <Box display="flex" flexDirection="column" gap={2} p={2}>
                {/* Code Device with Discontinue Checkbox */}
                <Box display="flex" alignItems="center" gap={2}>
                    <TextField label="Code Device" variant="outlined" fullWidth />
                    <Box display="flex" alignItems="center" gap={1}>
                        <Checkbox />
                        <Typography>Discontinue</Typography>
                    </Box>
                </Box>

                {/* Default Account Ref */}
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="accountRef">Default Account Ref.</InputLabel>
                    <Select
                        label="Default Account Ref."
                        id="accountRef"
                        defaultValue=""
                        fullWidth
                    >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                    </Select>
                </FormControl>

                {/* Libellé de la devise */}
                <TextField label="Libellé de la devise" variant="outlined" fullWidth />

                {/* Conversion Rates */}
                <Box display="flex" flexDirection="column" gap={1}>
                    <TextField label="Taux convers / 1 US $ =" variant="outlined" fullWidth />
                    <Box display="flex" alignItems="center" gap={1}>
                        <TextField label="Taux convers / 1 US $ =" variant="outlined" fullWidth />
                        <Typography style={{ marginLeft: "8px", color: "gray" }}>LOCALE</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <TextField label="Taux convers / 1 US $ =" variant="outlined" fullWidth />
                        <Typography style={{ marginLeft: "8px", color: "red" }}>IMPORTATION TAUX</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <TextField label="Taux convers / 1 US $ =" variant="outlined" fullWidth />
                        <Typography style={{ marginLeft: "8px", color: "blue" }}>Bulletin de paie TAUX</Typography>
                    </Box>
                </Box>

                {/* Save Button */}
                <Box display="flex" justifyContent="flex-start" gap={1} mt={2}>
                    <SaveButton />
                </Box>
            </Box>
        </CustomModal>
    );
};

export default AddCurrencyDetailsModal;
