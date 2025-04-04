import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar } from "@mui/material";
import { Star, Notifications, ZoomOutMap, KeyboardArrowDown } from "@mui/icons-material";
import topBarConfig from "./initial"; // Import configuration
import topBarStyles from "./topBarStyles"; // Import styles
import ProfileMenu from "../dropdown/ProfileMenu"; // Import ProfileMenu Component

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Dummy user data (Replace with actual data from state or context)
  const user = {
    name: "John Doue",
    role: "Admin", // Change to "User" to test different roles
    avatarUrl: "https://i.pravatar.cc/40", // Replace with actual avatar URL
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ ...topBarStyles.appBar, backgroundColor: topBarConfig.theme.topBarBgColor }}>
      <Toolbar sx={topBarStyles.toolbar}>
        {/* Left Side - Application Name */}
        <Typography component="div" sx={topBarStyles.title}>
          Welcome to {topBarConfig.appName}
        </Typography>

        {/* Right Side - Icons & Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: "auto" }}>
          <IconButton sx={{ ...topBarStyles.iconButton, color: topBarConfig.theme.iconColor }}>
            <Star />
          </IconButton>

          <IconButton sx={{ ...topBarStyles.iconButton, color: topBarConfig.theme.iconColor }}>
            <Notifications />
          </IconButton>

          <IconButton sx={{ ...topBarStyles.iconButton, color: topBarConfig.theme.iconColor }}>
            <ZoomOutMap />
          </IconButton>

          {/* Avatar & Username (Click to Open Profile Menu) */}
          <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleProfileClick}>
            <Avatar src={user.avatarUrl} />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body1" sx={{ color: "black"}}>{user.name}</Typography>
              {user.role === "Admin" && (
                <Typography variant="caption" color="gray">
                  Admin
                </Typography>
              )}
            </Box>
            <KeyboardArrowDown sx={{ color: "gray", ml: 1 }} />
          </Box>

          {/* Profile Menu */}
          <ProfileMenu anchorEl={anchorEl} handleClose={handleMenuClose} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
