import React from "react";
import { Box, TextField, Typography, Checkbox, FormControlLabel, Button, Paper, Select, MenuItem } from "@mui/material";

const PersonalandClientForm = () => {
    
    return (
      <>
        {/* Client Form */}
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
              sx={{ flex: "1", backgroundColor: "#f0f4c3" }}
            />

            {/* Company Name Field - Large */}
            <TextField
              label="Company Name"
              variant="outlined"
              size="small"
              sx={{ flex: "3" }}
            />

            {/* BC Obligatoire Checkbox */}
            {/* <FormControlLabel
              control={<Checkbox color="success" />}
              label={
                <Typography sx={{ color: "green" }}>BC Obligatoire</Typography>
              }
            /> */}
          </Box>

          {/* Name Fields */}
          <Box display="flex" gap={2} mb={2}>
            <TextField
              label="First Name"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="Middle Name"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="Last Name"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>

          {/* Société and Abbreviation Fields */}
          <Box display="flex" gap={2} mb={2}>
            <TextField
              label="Société"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="Abbreviation"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="Designation"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>

          {/* Identification Fields */}
          <Box display="flex" gap={2} mb={2}>
            <TextField
              label="N.R.C"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="N° Impôt€"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="ID NAT."
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField label="TVA" variant="outlined" size="small" fullWidth />
          </Box>
        </Paper>

        {/* Clinet this one */}
        <Paper
          elevation={2}
          sx={{ p: 3, m: 2, display: "flex", justifyContent: "space-between" }}
        >
          {/* Left Section */}
          <Box flex={1}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Client Category
            </Typography>

            <Box display="flex" gap={2} mb={2}>
              <Select fullWidth size="small" defaultValue="" displayEmpty>
                <MenuItem value="">Client Type</MenuItem>
              </Select>

              <Select fullWidth size="small" defaultValue="" displayEmpty>
                <MenuItem value="">Account Type</MenuItem>
              </Select>

              <Select fullWidth size="small" defaultValue="" displayEmpty>
                <MenuItem value="">Fac. Type</MenuItem>
              </Select>

              <TextField
                label="Telephone"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Email IDs"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={2}
                sx={{ backgroundColor: "#f0f4c3" }}
              />
              <TextField
                label="Home Address"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={2}
                sx={{ backgroundColor: "#f0f4c3" }}
              />
            </Box>

            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Postal Code"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                label="City"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                label="Villa"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                label="Province"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box display="flex" gap={1} mb={1}>
              <Select size="small" defaultValue="" displayEmpty>
                <MenuItem value="">Country</MenuItem>
              </Select>

              {/* <Select size="small" defaultValue="" displayEmpty>
                <MenuItem value="">Segment</MenuItem>
              </Select> */}

              <Select size="small" defaultValue="" displayEmpty>
                <MenuItem value="">Commercial</MenuItem>
              </Select>

              <Button
                variant="contained"
                color="primary"
                sx={{ height: "40px" }}
              >
                + Machine
              </Button>
            </Box>
          </Box>

          {/* Right Side Panel */}
          <Paper
            elevation={1}
            sx={{
              p: 2,
              ml: 2,
              backgroundColor: "#e3f2fd",
              minWidth: "250px",
              maxWidth: "300px",
            }}
          >
            <Box display="flex" gap={1} alignItems="center" mb={1}>
              <TextField
                label="Remise"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Typography>%</Typography>
              <FormControlLabel control={<Checkbox />} label="Local Client" />
            </Box>

            <Box display="flex" gap={1} alignItems="center" mb={1}>
              <TextField
                label="Credit Limit"
                variant="outlined"
                size="small"
                fullWidth
              />
              <FormControlLabel control={<Checkbox />} label="Credit" />
            </Box>

            <Box display="flex" gap={1} alignItems="center" mb={1}>
              <TextField
                label="Main d'oeuvre remise"
                variant="outlined"
                size="small"
                fullWidth
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Clients Douteux"
              />
            </Box>

            <Box display="flex" gap={1} alignItems="center" mb={1}>
              <TextField
                label="Proforma Validity"
                variant="outlined"
                size="small"
                fullWidth
              />
              <FormControlLabel control={<Checkbox />} label="Supprimer" />
            </Box>

            <Box display="flex" gap={1} alignItems="center" mb={1}>
              <TextField
                label="Fournitures remise"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box display="flex" gap={1} flexWrap="wrap">
              <FormControlLabel control={<Checkbox />} label="Exo. TVA" />
              <FormControlLabel
                control={<Checkbox />}
                label="Pas TVA Non Declare"
              />
              <FormControlLabel control={<Checkbox />} label="Vente Credit" />
              <FormControlLabel control={<Checkbox />} label="JMA" />
              <FormControlLabel control={<Checkbox />} label="Cellule Fiscal" />
              <FormControlLabel control={<Checkbox />} label="A4 Print" />
            </Box>
          </Paper>
        </Paper>
      </>
    );
};

export default PersonalandClientForm;
