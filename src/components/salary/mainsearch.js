import React from "react";
import { Box, TextField, IconButton, Typography, Button } from "@mui/material";
import Search from "@mui/icons-material/Search";
import CleaningServices from "@mui/icons-material/CleaningServices";

const SearchField = ({ label }) => (
  <Box
    display="flex"
    alignItems="center"
    gap={1}
    style={{ margin: "8px", width: "350px" }}
  >
    <TextField
      label={label}
      variant="outlined"
      placeholder="Search Here"
      size="small"
      fullWidth
    />
    <Button
      variant="outlined"
      sx={{ height: 40, minWidth: 40, borderRadius: 1 }}
    >
      <Search fontSize="small" />
    </Button>
  </Box>
);

const MainSearch = () => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: "#fff",
        boxShadow: 1,
        mb: 1,
      }}
    >
      {/* Header with title and cleanup icon */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={1}
      >
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Search
        </Typography>
        <IconButton
          color="error"
          sx={{ border: "1px solid red", borderRadius: 2 }}
        >
          <CleaningServices />
        </IconButton>
      </Box>

      {/* Search Fields */}
      <Box display="flex" alignItems="center" gap={2}>
        <SearchField label="Search Metrics" />
        <SearchField label="Search Employees" />
        <SearchField label="Search Function" />
        <SearchField label="Search Telephone" />
      </Box>
    </Box>
  );
};

export default MainSearch;
