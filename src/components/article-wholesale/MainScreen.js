import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { useNavigate } from "react-router-dom";

const MainArticleWholeSale = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {/* Action Buttons Row */}
      <Box
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
          Regularization
        </Button>
        <Button
          variant="contained"
          startIcon={<HistoryIcon />}
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
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          sx={{
            textAlign: "center",
            backgroundColor: "error.light", // Light red for delete button
            color: "error.contrastText",
            "&:hover": {
              backgroundColor: "error.main", // Darker red on hover
            },
          }}
        >
          Delete
        </Button>
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
        <Box mb={2}>
          <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
            Advanced Search
          </InputLabel>
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

        {/* Additional Wholesale Fields */}
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          mt={2}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <TextField
            label="Min Wholesale Qty."
            variant="outlined"
            size="small"
            fullWidth
            type="number"
          />

          <TextField
            label="Wholesale Percent"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />

          <Button
            variant="contained"
            startIcon={<PriceChangeIcon />}
            sx={{
              minWidth: "240px", // Increased width to accommodate text
              height: "40px",
              backgroundColor: "primary.main",
              color: "white",
              padding: "0 16px", // Add proper padding
              textTransform: "none", // Prevents all-caps text which takes more space
              fontSize: "14px", // Slightly smaller font size
              whiteSpace: "nowrap", // Prevents text wrapping
              overflow: "hidden", // Prevents text overflow
              textOverflow: "ellipsis", // Adds ellipsis if text is too long
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px", // Space between icon and text
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Change Wholesale Price
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

export default MainArticleWholeSale;
