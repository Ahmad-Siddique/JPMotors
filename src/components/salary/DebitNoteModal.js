import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Backdrop,
  Fade,
  Grid,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DebitNoteModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Deposit Note
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Materic" fullWidth margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Amount" fullWidth margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Advance Solde" fullWidth margin="normal" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Libelle" fullWidth margin="normal" />
            </Grid>
          </Grid>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleClose}>
              Save
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DebitNoteModal;

