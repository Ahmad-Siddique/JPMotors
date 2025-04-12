import React from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import SimpleTable from "./DrawerTable";

const RequestDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: "80vw" } }}
    >
      <Box p={3}>
        <Typography variant="h6" mb={2}>
          Request for price details
        </Typography>

        {/* Form */}
        <Grid container spacing={2}>
          {/* Row 1 */}
          <Grid item xs={3}>
            <TextField
              label="Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Nova Proforma" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Number" type="number" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Client" fullWidth />
          </Grid>

          {/* Row 2 */}
          <Grid item xs={3}>
            <TextField label="Telephone" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="V/Reference" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Vehicle</InputLabel>
              <Select label="Vehicle">
                <MenuItem value="v1">Vehicle 1</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}></Grid>

          {/* Row 3 */}
          <Grid item xs={3}>
            <TextField label="Model" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Chassis" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Type" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Engine" fullWidth />
          </Grid>

          {/* Row 4 */}
          <Grid item xs={4}>
            <TextField label="Year" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Pompe Ref" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Pompe Serie" fullWidth />
          </Grid>
        </Grid>

        {/* Table */}
        <Box mt={4}>
          <SimpleTable />
        </Box>

        {/* Second Form */}
        <Grid container spacing={2} mt={2}>
          {/* Row 1 */}
          <Grid item xs={4}>
            <TextField label="Reference" fullWidth size="small" />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", gap: 1 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Supplier</InputLabel>
              <Select label="Supplier">
                <MenuItem value="s1">Supplier 1</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              sx={{ minWidth: "40px", height: "40px", alignSelf: "center" }}
            >
              <SearchIcon />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth size="small">
              <InputLabel>Denomination</InputLabel>
              <Select label="Denomination">
                <MenuItem value="d1">Denomination 1</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={8} display="flex" alignItems="center" gap={1}>
            <TextField
              label="Quantity"
              type="number"
              fullWidth
              size="small"
              sx={{ maxWidth: "30%" }}
            />
            <Button
              color="primary"
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ paddingX: 2, height: "40px" }}
            >
              Add
            </Button>
            <Button
              color="error"
              variant="outlined"
              startIcon={<CancelIcon />}
              sx={{ paddingX: 2, height: "40px" }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<InfoIcon />}
              sx={{ height: "40px" }}
            >
              Product Details
            </Button>
          </Grid>
        </Grid>

        {/* Bottom Buttons */}
        <Grid container spacing={2} mt={4}>
          <Grid item xs={6}>
            <Button variant="outlined" startIcon={<FileDownloadIcon />}>
              Export Excel All
            </Button>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end" gap={1}>
            <Button variant="outlined" startIcon={<FileDownloadIcon />}>
              Export Excel
            </Button>
            <Button variant="outlined" startIcon={<PrintIcon />}>
              Impression
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default RequestDrawer;
