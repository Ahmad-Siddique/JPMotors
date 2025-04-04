import React from 'react';
import { useState } from 'react';
import AddEtage from '../modals/AddEtage';
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  Typography
} from '@mui/material';

const EmplacementQuantityDetail = () => {
  const [openEtageModal, setOpenEtageModal] = useState(false);
  const handleOpenEtageModal = () => {
          setOpenEtageModal(true);
      };
  
      const handleCloseEtageModal = () => {
          setOpenEtageModal(false);
      };

  return (
    <Box p={3} display="flex" gap={2}>
      <Paper elevation={2} style={{ padding: '16px', flex: 3 }}>
        <Typography variant="h6" gutterBottom>
          Emplacement et Quantity Détails
        </Typography>
        <Button variant="contained" color="primary" style={{ marginBottom: '16px' }} onClick={handleOpenEtageModal} >
          + Gross Etage
        </Button>
        <Grid container spacing={2}>
          {[
            'Rayon',
            'Etagère',
            'Casier',
            'Qté Min.',
            'Qté Max.',
            'On Order Qté',
            'Stock Qté',
            'Yearly Sales',
            'Order Qté'
          ].map((label) => (
            <Grid item xs={12} sm={6} md={3} key={label}>
              <TextField
                label={label}
                fullWidth
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: label.includes('Qté') || label.includes('Sales') ? '#f0f4fa' : 'white',
                  },
                }}
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              label="Notes"
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              InputProps={{
                readOnly: true,
                style: { backgroundColor: 'white' },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Checkbox /> Supprimer
          </Grid>
        </Grid>
      </Paper>
      <AddEtage open={openEtageModal} onClose={handleCloseEtageModal} />
    </Box>
  );
};

export default EmplacementQuantityDetail;
