import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const SimpleTable = () => {
  const sampleData = [
    { fileName: "Report_Q1.pdf", createDate: "2025-03-29", user: "Admin" },
    {
      fileName: "Invoice_1234.xlsx",
      createDate: "2025-03-28",
      user: "Manager",
    },
    {
      fileName: "Tax_Details.docx",
      createDate: "2025-03-27",
      user: "Accountant",
    },
  ];

  return (
    <Box
      flex={1}
      sx={{
        padding: "16px",
        backgroundColor: "#fff",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#333" }}>
              {" "}
              {/* Dark background */}
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                File Name
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Create Date
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                USER
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.fileName}</TableCell>
                <TableCell>{row.createDate}</TableCell>
                <TableCell>{row.user}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: 4,
          paddingBottom: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<OpenInNewIcon />}
        >
          Open
        </Button>
      </Box>
    </Box>
  );
};

export default SimpleTable;
