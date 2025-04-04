import React from "react";
import { Box, TextField, Typography, Checkbox, FormControlLabel, Paper } from "@mui/material";

const PersonalDetailComponent = () => {
    return (
        <Paper elevation={2} sx={{ p: 3, m: 2 }}>
            {/* Header */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Personal Details
            </Typography>

            <Box display="flex" alignItems="center" gap={2} mb={2}>
                {/* Nouveau Field */}
                <TextField
                    label="Nouveau"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ backgroundColor: "#f0f4c3" }}
                />

                {/* Company Name Field */}
                <TextField
                    label="Company Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                />

                {/* BC Obligatoire Checkbox */}
                <FormControlLabel
                    control={<Checkbox color="success" />}
                    label={<Typography sx={{ color: "green" }}>BC Obligatoire</Typography>}
                />
            </Box>

            {/* Name Fields */}
            <Box display="flex" gap={2} mb={2}>
                <TextField label="First Name" variant="outlined" size="small" fullWidth />
                <TextField label="Middle Name" variant="outlined" size="small" fullWidth />
                <TextField label="Last Name" variant="outlined" size="small" fullWidth />
            </Box>

            {/* Société and Abbreviation Fields */}
            <Box display="flex" gap={2} mb={2}>
                <TextField label="Société" variant="outlined" size="small" fullWidth />
                <TextField label="Abbreviation" variant="outlined" size="small" fullWidth />
                <TextField label="Designation" variant="outlined" size="small" fullWidth />
            </Box>

            {/* Identification Fields */}
            <Box display="flex" gap={2} mb={2}>
                <TextField label="N.R.C" variant="outlined" size="small" fullWidth />
                <TextField label="N° Impôt€" variant="outlined" size="small" fullWidth />
                <TextField label="ID NAT." variant="outlined" size="small" fullWidth />
                <TextField label="TVA" variant="outlined" size="small" fullWidth />
            </Box>
        </Paper>
    );
};

export default PersonalDetailComponent;
