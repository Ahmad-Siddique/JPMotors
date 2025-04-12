// components/SimpleTable.jsx
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
    {
      number: 1,
      reference: "REF123",
      pceDenomination: "Gear Assembly",
      quantity: 2,
      supplier: "ABC Corp",
    },
    {
      number: 2,
      reference: "REF456",
      pceDenomination: "Oil Filter",
      quantity: 5,
      supplier: "XYZ Ltd",
    },
    {
      number: 3,
      reference: "REF789",
      pceDenomination: "Brake Pad",
      quantity: 4,
      supplier: "AutoTech",
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
        marginTop: 4,
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#333" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Number
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                References
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                PCE Denominations
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Quantity
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Supplier
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.reference}</TableCell>
                <TableCell>{row.pceDenomination}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.supplier}</TableCell>
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
