import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Paper } from '@mui/material';
import CustomModal from './CustomModal';
import {AddButton,CancelButton,SuprimerButton} from '../buttons/ButtonComponents';

const ReferenceComponent = ({ open, onClose }) => {
    const [references, setReferences] = useState(['SB-3806-KIT', '0120-90R', '43330-39415']);
    const [newReference, setNewReference] = useState('');

    const handleAdd = () => {
        if (newReference.trim()) {
            setReferences([...references, newReference.trim()]);
            setNewReference('');
        }
    };

    const handleDelete = (index) => {
        const updatedReferences = [...references];
        updatedReferences.splice(index, 1);
        setReferences(updatedReferences);
    };

    return (
        <CustomModal open={open} onClose={onClose} title="References" width="800px">
            <Box display="flex" justifyContent="space-between" gap={2}>
                <Paper elevation={1} sx={{ width: '45%', p: 2 }}>
                    <Typography fontWeight="bold">Product Code</Typography>
                    {references.map((ref, index) => (
                        <Typography key={index} mt={1}>{ref}</Typography>
                    ))}
                    <TextField
                        label="Enter New"
                        size="small"
                        fullWidth
                        value={newReference}
                        onChange={(e) => setNewReference(e.target.value)}
                        sx={{ mt: 2 }}
                    />
                    <Box mt={1} display="flex" >
                        <AddButton />
                        <SuprimerButton/>
                        <CancelButton/>
                    </Box>
                </Paper>
                <Paper elevation={1} sx={{ width: '45%', p: 2 }}>
                    <Typography fontWeight="bold">Product Code</Typography>
                    <Box mt={1}>
                        <Button variant="contained" color="primary" fullWidth>Add All To References</Button>
                    </Box>
                </Paper>
            </Box>
        </CustomModal>
    );
};

export default ReferenceComponent;
