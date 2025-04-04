import React from "react";
import { Box, Select, MenuItem, Checkbox, Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "R1", C1: 40, C2: 68, C3: 30, C4: 50 },
  { name: "R2", C1: 70, C2: 20, C3: 75, C4: 60 },
  { name: "R3", C1: 60, C2: 65, C3: 10, C4: 40 },
  { name: "R4", C1: 85, C2: 25, C3: 65, C4: 95 },
  { name: "R5", C1: 95, C2: 45, C3: 35, C4: 30 }
];

const ChartModal = ({ open, onClose }) => {
  return (
    <CustomModal open={open} onClose={onClose} title="Chart" width="800px" >
      <Box display="flex" flexDirection="column" gap={2}>
        
        {/* Chart Container */}
        <Box width="700px" height="450px">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="C1" fill="red" />
              <Bar dataKey="C2" fill="green" />
              <Bar dataKey="C3" fill="blue" />
              <Bar dataKey="C4" fill="yellow" />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Footer Controls */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Dropdowns */}
          <Box display="flex" gap={2}>
            <Select defaultValue="Combo 1">
              <MenuItem value="Combo 1">Combo 1</MenuItem>
              <MenuItem value="Combo 2">Combo 2</MenuItem>
            </Select>
            <Select defaultValue="Combo 2">
              <MenuItem value="Combo 1">Combo 1</MenuItem>
              <MenuItem value="Combo 2">Combo 2</MenuItem>
            </Select>
          </Box>

          {/* Checkbox */}
          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography>Incremental</Typography>
          </Box>
        </Box>

      </Box>
    </CustomModal>
  );
};

export default ChartModal;
