import React from "react";
import { Button } from "@mui/material";
import CustomButton from "./CustomButton";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EditIcon from "@mui/icons-material/Edit";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HistoryIcon from "@mui/icons-material/History";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { BarChart, History } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import SelectAllIcon from "@mui/icons-material/SelectAll";


export const AddArticleButton = ({ onClick }) => (
  <CustomButton icon={<PostAddIcon />} label="Add Article" onClick={onClick} />
);

export const ModifyButton = ({ onClick }) => (
  <CustomButton icon={<EditIcon />} label="Modify" onClick={onClick} />
);
export const InsertButton = ({ onClick }) => (
  <CustomButton icon={<PostAddIcon />} label="Insert" onClick={onClick} />
);

export const RegularisationButton = ({ onClick }) => (
  <CustomButton icon={<ReceiptIcon />} label="Regularisation" onClick={onClick} />
);

export const HistoryButton = ({ onClick }) => (
  <CustomButton icon={<HistoryIcon />} label="History" onClick={onClick} />
);

export const ReferencesButton = ({ onClick }) => (
  <CustomButton icon={<LinkIcon />} label="References" onClick={onClick} />
);

export const DeleteButton = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      border: "2px solid red", // Red border
      color: "red", // Red icon
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "red", // Full red background on hover
        color: "white", // White icon on hover
      },
    }}
  >
    <DeleteIcon />
  </IconButton>
);

export const ProceedButton = ({ onClick }) => (
  <CustomButton
    icon={<CheckCircleIcon />}
    label="Proceed"
    onClick={onClick}
    color="primary" // Use primary color for proceed
  />
);
export const SaveButton = ({ onClick }) => (
  <CustomButton icon={<SaveIcon />} label="Save" onClick={onClick} />
);


export const ChartButton = ({ onClick }) => (
  <CustomButton icon={<BarChart />} label="Chart" onClick={onClick} color="primary" />
);

export const ImpressionHistoryButton = ({ onClick }) => (
  <CustomButton icon={<History />} label="Impression History" onClick={onClick} color="secondary" />
);

export const ViewReport = ({ onClick }) => (
  <CustomButton icon={<BarChart />} label="View Report" onClick={onClick} color="primary" />
);

export const BomButton = ({ onClick }) => (
  <CustomButton icon={<ReceiptIcon />} label="BOM" onClick={onClick} />
);

export const AddButton = ({ onClick }) => (
  <CustomButton icon={<PostAddIcon />} label="Add" onClick={onClick} />
);

export const ReferencesExistsButton = ({ onClick }) => (
  <CustomButton icon={<CheckCircleIcon />} label="Références Exists" onClick={onClick} />
);

export const ModifierPriceButton = ({ onClick }) => (
  <CustomButton
    icon={<AttachMoneyIcon />}
    label="Modifier Price"
    onClick={onClick}
    color="default"
  />
);

export const ChangeConvRateButton = ({ onClick }) => (
  <CustomButton
    icon={<SwapHorizIcon />}
    label="Change Conv Rate"
    onClick={onClick}
    color="default"
  />
);

export const InformationSurCommandeButton = ({ onClick }) => (
  <CustomButton
    icon={<InfoIcon />}
    label="Information Sur Commande"
    onClick={onClick}
    color="default"
  />
);

export const CancelButton = ({ onClick }) => (
  <CustomButton
    label="Cancel"
    onClick={onClick}
    color="default"
  />
);

export const SuprimerButton = ({ onClick }) => (
  <CustomButton
    icon={<DeleteIcon />}
    label="Suprimer"
    onClick={onClick}
    color="danger"
  />
);

export const AddToBasketButton = ({ onClick }) => {
  return (
      <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={onClick}
          style={{ textTransform: "none" , backgroundColor: "#50C800"}}
      >
          Add To Basket
      </Button>
  );
};

export const AddClientButton = ({ onClick }) => (
  <CustomButton icon={<AddIcon />} label="Add Client" onClick={onClick} color="primary" />
);

export const ModifyClientButton = ({ onClick }) => (
  <CustomButton icon={<EditIcon />} label="Modify" onClick={onClick} color="default" />
);

export const SelectClientButton = ({ onClick }) => (
  <CustomButton icon={<SelectAllIcon />} label="Select Client" onClick={onClick} color="default" />
);