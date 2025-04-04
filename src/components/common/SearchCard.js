import React, { useState } from "react";
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Typography, IconButton } from "@mui/material";
import { Search, CleaningServices, ExpandLess, ExpandMore, InsertChart } from "@mui/icons-material";

const SearchCard = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: "#fff",
        boxShadow: 1,
      }}
    >
      {/* Header: "Advance Search" & Cleanup Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={toggleExpand} color="primary">
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          <Typography variant="h6">Advance Search</Typography>
        </Box>
        <IconButton color="error" sx={{ border: "1px solid red", borderRadius: 2 }}>
          <CleaningServices />
        </IconButton>
      </Box>

      {expanded && (
        <>
          {/* Search Manufacturer & Sale Graph in Row */}
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <FormControl sx={{ minWidth: 200 }} size="small">
              <InputLabel>Search Manufacturer</InputLabel>
              <Select defaultValue="" sx={{ height: 40 }}>
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="1">Manufacturer 1</MenuItem>
                <MenuItem value="2">Manufacturer 2</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" startIcon={<InsertChart />} sx={{ height: 40, minWidth: 140 }}>
              SALE GRAPH
            </Button>
          </Box>

          {/* Search Fields Row */}
          <Box display="flex" gap={2} mb={1}>
            {/* Article Code Search */}
            <Box display="flex" flexDirection="column" flex={1} position="relative">
              <Typography
                sx={{ position: "absolute", top: -20, right: 5, fontSize: 12, color: "blue", textDecoration: "underline", cursor: "pointer" }}
              >
                [ Reference Only ]
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <TextField fullWidth label="Article Code" placeholder="Search Here" size="small" />
                <Button variant="outlined" sx={{ height: 40, minWidth: 40, borderRadius: 1 }}>
                  <Search fontSize="small" />
                </Button>
              </Box>
              <FormControlLabel
                control={<Checkbox sx={{ padding: "4px" }} />}
                label={<Typography sx={{ fontSize: 12 }}>Search in Selected Category Only</Typography>}
                sx={{ marginLeft: 1, marginTop: "4px" }}
              />
            </Box>

            {/* Article Description Search */}
            <Box display="flex" flexDirection="column" flex={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <TextField fullWidth label="Article Description" placeholder="Search Here" size="small" />
                <Button variant="outlined" sx={{ height: 40, minWidth: 40, borderRadius: 1 }}>
                  <Search fontSize="small" />
                </Button>
              </Box>
              <FormControlLabel
                control={<Checkbox sx={{ padding: "4px" }} />}
                label={<Typography sx={{ fontSize: 12 }}>Don't show zero quantity</Typography>}
                sx={{ marginLeft: 1, marginTop: "4px" }}
              />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SearchCard;
