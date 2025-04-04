import React, { useState } from 'react';
import { Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel, Checkbox, Typography, Box, Paper } from '@mui/material';
import { BomButton, AddButton, ReferencesExistsButton } from '../buttons/ButtonComponents';
import ReferenceComponent from '../modals/ReferenceComponent';
import AddEtage from '../modals/AddEtage';
import BOMDetailModal from '../modals/BOMDetailModal';
const ArticleDetail = () => {
    const [openReferenceModal, setOpenReferenceModal] = useState(false);
    
    const [openBOMModal, setOpenBOMModal] = useState(false);

    const handleOpenBOMModal = () => {
        setOpenBOMModal(true);
    };

    const handleCloseBOMModal = () => {
        setOpenBOMModal(false);
    };

    const handleOpenReferenceModal = () => {
        setOpenReferenceModal(true);
    };

    const handleCloseReferenceModal = () => {
        setOpenReferenceModal(false);
    };


    


    return (
        <Box p={3} display="flex" gap={2}>
            <Paper elevation={2} style={{ padding: '16px', flex: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Article Details
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Product Family</InputLabel>
                            <Select>
                                <MenuItem value="">Select</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <FormControl fullWidth>
                            <InputLabel>Segment</InputLabel>
                            <Select>
                                <MenuItem value="">Select</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField label="Labo Reserve Qty" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField label="Code Price" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField label="Désignation pièce" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField label="Modèles véhicules" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Références" multiline rows={4} fullWidth variant="outlined" />
                    </Grid>
                    <Grid item>
                        <BomButton onClick={handleOpenBOMModal}/>
                        <AddButton />
                        <Checkbox style={{ marginLeft: 8 }} /> Block Sales for clients
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={2} style={{ padding: '16px', flex: 1, backgroundColor: '#f0f4fa' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label="Last Purchase Price" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Last Purchase Date" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="New Price de Vente" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="New Bénéf./Pièce ->" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <ReferencesExistsButton onClick={handleOpenReferenceModal} />
                    </Grid>
                </Grid>
            </Paper>

            {/* Reference Modal */}
            <ReferenceComponent open={openReferenceModal} onClose={handleCloseReferenceModal} />
            
            <BOMDetailModal open={openBOMModal} onClose={handleCloseBOMModal} />
        </Box>
    );
};

export default ArticleDetail;
