import React from "react";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DataTable from "../../common/DataTable";

const columns = [
    { id: "id", label: "ID" },
    { id: "clientName", label: "Client Name", type: "link" },
    { id: "mobile", label: "Mobile / Telephone" },
    { id: "email", label: "Email" },
    { id: "address", label: "Address / City" }
];

const rows = [
    { id: 1, clientName: "SOEUR DE SAINT FAMILLE D'IDIOFA", mobile: "0818801944, 0817160014", email: "vkazadi@unicef.org; ea...", address: "Kinshasa/..." },
    { id: 2, clientName: "SOEUR DE SAINT FAMILLE D'IDIOFA", mobile: "0818801944, 0817160014", email: "vkazadi@unicef.org; ea...", address: "Kinshasa/..." },
    { id: 3, clientName: "SOEUR DE SAINT FAMILLE D'IDIOFA", mobile: "0818801944, 0817160014", email: "vkazadi@unicef.org; ea...", address: "Kinshasa/..." },
    { id: 4, clientName: "SOEUR DE SAINT FAMILLE D'IDIOFA", mobile: "0818801944, 0817160014", email: "vkazadi@unicef.org; ea...", address: "Kinshasa/..." },
    { id: 5, clientName: "SOEUR DE SAINT FAMILLE D'IDIOFA", mobile: "0818801944, 0817160014", email: "vkazadi@unicef.org; ea...", address: "Kinshasa/..." }
];

const SearchComponent = () => {
    return (
        <Box sx={{ p: 2, borderRadius: 2, backgroundColor: "#fff", boxShadow: 1 }}>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                <Box>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                        Search Result
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Search your product in the list
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <TextField 
                        size="small" 
                        placeholder="Search in table" 
                        variant="outlined" 
                        sx={{ width: 300 }} 
                    />
                    <IconButton color="default" sx={{ border: "1px solid #ddd", borderRadius: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Data Table */}
            <DataTable 
                columns={columns} 
                rows={rows} 
                pageSize={10} 
                onLinkClick={(value) => console.log("Clicked:", value)}
            />

            {/* Footer */}
            <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2}>
                <Typography variant="body2" style={{ fontWeight: "bold" }}>
                    Total Clients: 7261
                </Typography>
            </Box>
        </Box>
    );
};

export default SearchComponent;
