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
import { useNavigate } from "react-router-dom";
import ProductTableBOM from "../common/ProductListTableBOM";

const MainArticle = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {/* Action Buttons Row */}
      

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
        <ProductTableBOM />
      </Box>
    </Box>
  );
};

export default MainArticle;
