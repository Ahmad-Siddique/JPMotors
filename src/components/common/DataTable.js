import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Link } from "@mui/material";

const DataTable = ({ columns, rows, onLinkClick, pageSize = 5 }) => {
  // Transform columns to match MUI Data Grid format
  const formattedColumns = columns.map((col) => ({
    field: col.id,
    headerName: col.label,
    sortable: true,
    flex: 1,
    minWidth: 100,
    renderCell: (params) => {
      if (col.type === "link") {
        return (
          <Link
            component="button"
            variant="body2"
            color="primary"
            onClick={() => onLinkClick(params.value)}
          >
            {params.value}
          </Link>
        );
      } else if (col.type === "image") {
        return (
          <img
            src={params.value}
            alt="Employee"
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        );
      }
      return params.value;
    },
  }));

  // Controlled pagination state
  const [paginationModel, setPaginationModel] = useState({
    pageSize: pageSize, // ✅ Uses prop value, defaults to 5
    page: 0,
  });

  return (
    <Box
      sx={{
        maxHeight: 400,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 3,
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#262F37",
          color: "#000",
          fontSize: "1rem",
          fontWeight: "bold",
        },
        "& .MuiDataGrid-row:nth-of-type(odd)": {
          backgroundColor: "#f9f9f9",
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#e3f2fd",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={formattedColumns}
        pageSizeOptions={[5, 10, 15]}
        paginationModel={paginationModel} // Controlled pagination
        onPaginationModelChange={setPaginationModel} // Update state when changed
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
