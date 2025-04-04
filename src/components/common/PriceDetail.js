import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Box,
  Typography,
  Paper,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';

const PriceDetail = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    return (
        <Box p={3} display="flex" gap={2}>
            <Paper elevation={2} style={{ padding: "16px", flex: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Price Details
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid container spacing={1}>
                        {[ "Price ZAR", "Emb. CRT Qté", "Emb. Palette Qté", "Price EURO (€)", "FC >>", "Price US ($)", "New Alpha (€)", "After Remise (€)", "Price Catalog (€)", "Price Net JMA ($)", "New Poids Pièce", "Price Net JMA (€)", "Remise Bosch", "Price AED", "DHL Max Qté", "Group Remise Bosch", "Price Achat ($)", "Price d' achat en", "Poid Price", "Air Price $", "Coefficient FOB", "Volume Price", "PV", "Boat Price $", "Average Price $", "DHL Weight", "Volume Meter", "Min Gross Qty", "Calculated Weight", "Length", "Height", "Wholesale price", "C.IF. KIN", "NP" ].map((label) => (
                            <Grid item xs={12} sm={4} md={2} key={label}>
                                <TextField
                                    label={label}
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        readOnly: true,
                                        style: {
                                            backgroundColor: label.includes("Remise") || label.includes("Bosch") || label.includes("DHL") || label.includes("Gross") || label.includes("B") || label.includes("NP") ? "#f0f4fa" : "white",
                                        },
                                    }}
                                />
                            </Grid>
                        ))}

                        {/* Effective Date Field */}
                        <Grid item xs={12} sm={4} md={2}>
                            <DatePicker
                                label="Effective Date"
                                value={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </Grid>

                        {/* Gross Field with Percent Icon */}
                        <Grid item xs={12} sm={4} md={2}>
                            <TextField
                                label="Gross %"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="end">%</InputAdornment>
                                    ),
                                    style: { backgroundColor: "#f0f4fa" },
                                }}
                            />
                        </Grid>

                        {/* Marge Bénéficiaire Field with Percent Icon */}
                        <Grid item xs={12} sm={4} md={2}>
                            <TextField
                                label="Marge Bénéficiaire"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="end">%</InputAdornment>
                                    ),
                                    style: { backgroundColor: "#f0f4fa" },
                                }}
                            />
                        </Grid>

                        {/* B Field with "mtr" Label */}
                        <Grid item xs={12} sm={4} md={2}>
                            <TextField
                                label="B"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="end">mtr</InputAdornment>
                                    ),
                                    style: { backgroundColor: "#e6f0fa" },
                                }}
                            />
                        </Grid>

                        {/* F.O.B. Field */}
                        <Grid item xs={12} sm={4} md={2}>
                            <TextField
                                label="F.O.B."
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    readOnly: true,
                                    style: { backgroundColor: "white" },
                                }}
                            />
                        </Grid>

                        {/* No Remise Checkbox */}
                        <Grid item xs={12}>
                            <Checkbox /> No Remise
                        </Grid>
                    </Grid>
                </LocalizationProvider>
            </Paper>
        </Box>
    );
};

export default PriceDetail;
