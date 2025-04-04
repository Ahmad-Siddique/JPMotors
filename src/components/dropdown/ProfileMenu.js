import React, { useContext } from "react";
import { Menu, MenuItem, ListItemIcon, Divider } from "@mui/material";
import { Settings, Person, ExitToApp } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ anchorEl, handleClose }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      autoFocus={false}
      PaperProps={{
        sx: { width: 180 }, // Set the width of the menu
      }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon><Person fontSize="small" /></ListItemIcon>Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon><Settings fontSize="small" /></ListItemIcon>Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
        <ListItemIcon><ExitToApp fontSize="small" sx={{ color: "red" }} /></ListItemIcon>LOG OUT
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
