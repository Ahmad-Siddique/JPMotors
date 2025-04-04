import { Box, Button } from '@mui/material';
import React from 'react'
import TableCardHeader from '../common/TableCardHeader';
import EmployeeListTable from '../common/EmployeeListTable';
import TextField from '@mui/material/TextField';
import SimpleTable from './SimpleTable';
const TaxDeduction = () => {
    return (
      <>
        {/* Search Fields */}
        <Box display="flex" gap={2} mb={2}>
          <TextField
            label="Search Metrics"
            variant="outlined"
            size="small"
            fullWidth
          />
          <TextField
            label="From Date"
            type="date"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="To Date"
            type="date"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Employee List Table */}
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
            title="Employee List"
            description="Search employees and manage tax deductions"
          />
          <EmployeeListTable />
        </Box>

        {/* Two-Column Layout */}
        <Box display="flex" gap={2} mb={2}>
          {/* Left Column - Form */}
          <Box
            flex={1}
            sx={{
              padding: "16px",
              backgroundColor: "#fff",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            {/* <TableCardHeader
              title="Tax Deduction Details"
              description="Enter tax deduction details"
            /> */}
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Date"
                type="date"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <TextField
                  label="No. Facture"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ flex: 1 }}
                />
                <TextField
                  label="No. Import"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ flex: 1 }}
                />
                <TextField
                  label="Mont. S. TVA"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ flex: 1 }}
                />
                <TextField
                  label="Tax Amount"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ flex: 1 }}
                />
              </Box>
              <TextField
                label="Total"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
          </Box>

          {/* Right Column - List Table */}
          <Box
            flex={1}
            sx={{
              padding: "16px",
              backgroundColor: "#fff",
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <SimpleTable />
          </Box>
        </Box>

        {/* Action Buttons Row */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          {/* Left Side Buttons */}
          <Box display="flex" gap={2}>
            <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
            <Button variant="outlined" color="error">
              Delete
            </Button>
          </Box>

          {/* Right Side Buttons */}
          <Box display="flex" gap={2}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </>
    );
}

export default TaxDeduction