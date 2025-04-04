import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PrintIcon from "@mui/icons-material/Print";
import DescriptionIcon from "@mui/icons-material/Description";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DebitNoteModal from "./DebitNoteModal";
import CreditNoteModal from "./CreditNoteModal";
import BulletinDePaieModal from "./BulletinDePaieModal";
const buttonLabels = [
  "Debit Note",
  "Credit Note",
  "Décompte Final",
  "Conge",
  "Payment Date",
  "Advance Salary",
  "Buinzaine",
  "Bulletin De Paie",
  "Nouvel Engage",
  "Transaction History",
  "Advance Summary",
  "Impression Net A Paye",
  "Impression Quinzaine",
  "Attendance",
  "Mise A Jour Engage",
];

const ButtonSection = () => {
    const [open, setOpen] = useState(false);
     const [creditOpen, setCreditOpen] = useState(false);
    const [bulletinOpen, setBulletinOpen] = useState(false);
    

  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
     const handleCreditOpen = () => setCreditOpen(true);
    const handleCreditClose = () => setCreditOpen(false);
    
     const handleBulletinOpen = () => setBulletinOpen(true);
     const handleBulletinClose = () => setBulletinOpen(false);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 2,
        p: 2,
        backgroundColor: "#fff",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      {buttonLabels.map((label, index) => (
        <Button
          key={index}
          variant="contained"
          sx={{
            backgroundColor: "grey",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            textTransform: "none",
            fontSize: 14,
            fontWeight: "bold",
            p: 1,
          }}
          fullWidth
          onClick={() => {
            if (label === "Debit Note") {
              handleOpen();
            } else if (label === "Credit Note") {
              handleCreditOpen();
            } else if (label === "Bulletin De Paie") {
              handleBulletinOpen();
            }
          }}
        >
          {label}
          <ArrowForwardIcon fontSize="small" />
        </Button>
      ))}
      <DebitNoteModal open={open} handleClose={handleClose} />
      <CreditNoteModal open={creditOpen} handleClose={handleCreditClose} />
      <BulletinDePaieModal
        open={bulletinOpen}
        handleClose={handleBulletinClose}
      />
    </Box>
  );
};

const AdditionalSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
        p: 2,
        backgroundColor: "#fff",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      {/* Left Side */}
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          label="Effective Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          size="small"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Vision Employé supremers"
        />
      </Box>

      {/* Right Side */}
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "grey",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            textTransform: "none",
            fontSize: 14,
            fontWeight: "bold",
            p: 1,
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          startIcon={<PrintIcon />}
        >
          Print Prime
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "grey",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            textTransform: "none",
            fontSize: 14,
            fontWeight: "bold",
            p: 1,
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          startIcon={<DescriptionIcon />}
        >
          La Pradelle Report
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "grey",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            textTransform: "none",
            fontSize: 14,
            fontWeight: "bold",
            p: 1,
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          startIcon={<FileDownloadIcon />}
        >
          Summary Export
        </Button>
      </Box>
    </Box>
  );
};

export { ButtonSection, AdditionalSection };
