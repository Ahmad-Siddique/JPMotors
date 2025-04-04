import React from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const TableCardHeader = ({ title, description }) => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "16px 24px",
        mb: 2
      }}
    >
      {/* Title & Subtitle */}
      <Box>
        <Typography variant="h5" fontWeight="bold">{title}</Typography>
        {description && (
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        )}
      </Box>

      {/* Search Bar */}
      <TextField
        placeholder="Search in table"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ width: 250 }}
      />
    </Box>
  );
};

export default TableCardHeader;
