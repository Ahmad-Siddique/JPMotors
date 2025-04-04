import React from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  Backdrop,
  Fade,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BulletinDePaieModal = ({ open, handleClose }) => {
  const buttonStyles = {
    width: "100%",
    py: 2,
    mb: 1,
    justifyContent: "center", // Center align text
    textTransform: "none",
    fontSize: "1rem",
    backgroundColor: "#e0e0e0",
    color: "black",
    "&:hover": {
      backgroundColor: "#1976d2",
      color: "white",
    },
    border: "none",
    boxShadow: "none",
  };

  const lastButtonStyles = {
    ...buttonStyles,
    color: "error.main",
    "&:hover": {
      backgroundColor: "#1976d2",
      color: "white",
    },
  };

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
            borderRadius: 2,
            p: 0,
            outline: "none",
          }}
        >
          {/* Header with title and close button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <Typography variant="h6">Bulletin de paie</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={{ p: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Sélection Motif
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={buttonStyles}
                onClick={handleClose}
              >
                Demission
              </Button>
              <Button
                variant="contained"
                sx={buttonStyles}
                onClick={handleClose}
              >
                Revocation
              </Button>
              <Button
                variant="contained"
                sx={buttonStyles}
                onClick={handleClose}
              >
                Licencement
              </Button>
              <Button
                variant="contained"
                sx={buttonStyles}
                onClick={handleClose}
              >
                Licencement sans preavis pour faute lourde
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BulletinDePaieModal;
