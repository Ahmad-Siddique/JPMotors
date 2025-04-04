import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ open, onClose, title, children, height, width }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 3,
          minHeight: height || "300px", // ✅ Set height dynamically
          maxHeight: height || "80vh",
          width: width || "600px", // ✅ Set width dynamically
          padding: 2,
        },
      }}
    >
      {/* Modal Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingX={2}>
        <DialogTitle>{title}</DialogTitle>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Modal Content */}
      <DialogContent dividers sx={{ overflowY: "auto" }}>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomModal;
