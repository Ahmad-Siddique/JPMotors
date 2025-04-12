import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import TableCardHeader from "../common/TableCardHeader";
import ProductListTable from "../common/ProductListTable";

// Icons
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import HistoryIcon from "@mui/icons-material/History";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useNavigate } from "react-router-dom";
import ActionButtons from "../common/ActionButtons";
import CheckoutButton from "../buttons/CheckoutButton";
import { CleaningServices } from "@mui/icons-material";

const MainScreen = () => {
    const navigate = useNavigate();
    const [cartOpen, setCartOpen] = useState(false);
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {/* Action Buttons Row */}
      {/* <Box
        display="flex"
        gap={2}
        mb={3}
        sx={{
          overflowX: "auto",
          "& .MuiButton-root": {
            minWidth: "120px",
            backgroundColor: "grey.300", // Default gray color
            color: "text.primary", // Default text color
            "&:hover": {
              backgroundColor: "primary.main", // Blue color on hover
              color: "common.white", // White text on hover
            },
          },
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ textAlign: "center" }}
          onClick={() => handleNavigation("/file/articles/add")}
        >
          Add Article
        </Button>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ textAlign: "center" }}
        >
          Modify
        </Button>
        <Button
          variant="contained"
          startIcon={<SyncAltIcon />}
          sx={{ textAlign: "center" }}
        >
          History
        </Button>
       
        <Button
          variant="contained"
          startIcon={<LinkIcon />}
          sx={{ textAlign: "center" }}
        >
          References
        </Button>
       
      </Box> */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        <ActionButtons />
        <CheckoutButton onClick={() => setCartOpen(true)} />
      </Box>

      {/* Advanced Search Row */}
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          mb: 3,
        }}
      >
        <Box
          mb={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
            Advanced Search
          </InputLabel>
          <IconButton
            color="error"
            sx={{ border: "1px solid red", borderRadius: 2 }}
          >
            <CleaningServices />
          </IconButton>
        </Box>

        <Box
          display="flex"
          gap={2}
          alignItems="center"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <FormControl fullWidth size="small">
            <InputLabel>Search Manufacture</InputLabel>
            <Select label="Search Manufacture" defaultValue="">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="manufacturer1">Manufacturer 1</MenuItem>
              <MenuItem value="manufacturer2">Manufacturer 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel>Article Code</InputLabel>
            <Select label="Article Code" defaultValue="">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="code1">Code 1</MenuItem>
              <MenuItem value="code2">Code 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel>Article Description</InputLabel>
            <Select label="Article Description" defaultValue="">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="desc1">Description 1</MenuItem>
              <MenuItem value="desc2">Description 2</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" sx={{ minWidth: "50px", height: "40px" }}>
            <SearchIcon />
          </Button>
        </Box>

        {/* Client Selection and Action Buttons Row */}
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          mt={2}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {/* Checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label=""
            sx={{ minWidth: "150px" }}
          />

          {/* Client Name Select */}
          <FormControl
            size="small"
            sx={{ minWidth: "200px", flex: "1 1 auto" }}
          >
            <InputLabel>Client Name</InputLabel>
            <Select label="Client Name" defaultValue="">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="client1">Client 1</MenuItem>
              <MenuItem value="client2">Client 2</MenuItem>
              <MenuItem value="client3">Client 3</MenuItem>
            </Select>
          </FormControl>

          {/* Search Button */}
          <Button variant="contained" sx={{ minWidth: "50px", height: "40px" }}>
            <SearchIcon />
          </Button>

          {/* Client List Button */}
          <Button
            variant="contained"
            startIcon={<PeopleIcon />}
            sx={{
              minWidth: "180px",
              height: "40px",
              backgroundColor: "primary.main",
              color: "white",
              textTransform: "none",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Client List
          </Button>

          {/* Special Price Button */}
          <Button
            variant="contained"
            startIcon={<LocalOfferIcon />}
            sx={{
              minWidth: "140px",
              height: "40px",
              backgroundColor: "primary.main",
              color: "white",
              textTransform: "none",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Special Price
          </Button>

          {/* Group Discount Button */}
          <Button
            variant="contained"
            startIcon={<GroupWorkIcon />}
            sx={{
              minWidth: "150px",
              height: "40px",
              backgroundColor: "primary.main",
              color: "white",
              textTransform: "none",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Group Discount
          </Button>

          {/* Export List Button */}
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon />}
            sx={{
              minWidth: "120px",
              height: "40px",
              backgroundColor: "primary.main",
              color: "white",
              textTransform: "none",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Export List
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
        <ProductListTable />
      </Box>
    </Box>
  );
};

export default MainScreen;
