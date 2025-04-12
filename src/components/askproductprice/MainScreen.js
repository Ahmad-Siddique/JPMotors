import React from "react";

import {
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import TableCardHeader from "../common/TableCardHeader";
import ProductListTableAskProductPrice from "../common/ProductListTableAskAboutPrice";
import RequestDrawer from "./DrawerRequestForProductPrice";
// Icons

import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useNavigate } from "react-router-dom";

const MainScreen = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    };
    const handleOpenDrawer = () => setIsDrawerOpen(true);
    const handleCloseDrawer = () => setIsDrawerOpen(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  

  return (
    <Box>
      {/* Action Buttons Row */}

      <Box
        display="flex"
        gap={2}
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* Ident Client Column */}
        <Box
          flex={1}
          minWidth="250px"
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <Box display="flex" gap={1} alignItems="center">
            <FormControl fullWidth size="small">
              <InputLabel>Ident Client</InputLabel>
              <Select label="Ident Client" defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="client1">Client 1</MenuItem>
                <MenuItem value="client2">Client 2</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{ minWidth: "50px", height: "40px" }}
            >
              <SearchIcon />
            </Button>
          </Box>
          <Button
            startIcon={<DeleteIcon />}
            size="small"
            color="error"
            variant="outlined"
            sx={{ alignSelf: "flex-start" }}
          >
            Remove Filter
          </Button>
        </Box>

        {/* Product Code Column */}
        <Box
          flex={1}
          minWidth="250px"
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <Box display="flex" gap={1} alignItems="center">
            <FormControl fullWidth size="small">
              <InputLabel>Product Code</InputLabel>
              <Select label="Product Code" defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="code1">Code 1</MenuItem>
                <MenuItem value="code2">Code 2</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{ minWidth: "50px", height: "40px" }}
            >
              <SearchIcon />
            </Button>
          </Box>
          <Button
            startIcon={<PersonSearchIcon />}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ alignSelf: "flex-start" }}
          >
            Client + Code
          </Button>
        </Box>

        {/* Vehicle Column */}
        <Box
          flex={1}
          minWidth="250px"
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <Box display="flex" gap={1} alignItems="center">
            <FormControl fullWidth size="small">
              <InputLabel>Vehicle</InputLabel>
              <Select label="Vehicle" defaultValue="">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="vehicle1">Vehicle 1</MenuItem>
                <MenuItem value="vehicle2">Vehicle 2</MenuItem>
              </Select>
            </FormControl>
            {/* <Button
              variant="contained"
              sx={{ minWidth: "50px", height: "40px" }}
            >
              <SearchIcon />
            </Button> */}
          </Box>
          <Button
            startIcon={<FileDownloadIcon />}
            size="small"
            color="success"
            variant="outlined"
            sx={{ alignSelf: "flex-start" }}
          >
            Export to Excel Multiples
          </Button>
        </Box>
      </Box>

      {/* Product List Table */}
      <Box
        sx={{
          padding: "16px 24px",
          backgroundColor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          mb: 2,
        }}
      >
        <TableCardHeader
          title="Product List"
          description="Search your product in the list"
        />
        <ProductListTableAskProductPrice />
      </Box>

      {/* New Bottom Row Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Checkbox Row */}
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <FormControl>
            <label>
              <input type="checkbox" />
              <span style={{ marginLeft: 8 }}>Vision All</span>
            </label>
          </FormControl>
        </Box>

        {/* Button Row */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          {/* Left Side Buttons */}
          <Box display="flex" gap={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              onClick={handleOpenDrawer}
            >
              Complete Request for Price
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<SearchIcon />}
            >
              Refresh
            </Button>
          </Box>

          {/* Right Side Buttons */}
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              color="success"
              startIcon={<FileDownloadIcon />}
            >
              Export Excel
            </Button>
            <Button
              variant="outlined"
              color="warning"
              startIcon={<SearchIcon />}
            >
              Print
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
            >
              Insert
            </Button>
            <Button variant="contained" color="info" startIcon={<SearchIcon />}>
              View
            </Button>
          </Box>
        </Box>
      </Box>
      <RequestDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </Box>
  );
};

export default MainScreen;
