import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/images/logo/logo.png";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  InputBase,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Search,
  ExpandLess,
  ExpandMore,
  ListAlt,
  InsertDriveFile,
  StarBorder,
} from "@mui/icons-material";
import sidebarData from "./initial";
import sidebarStyles from "./styles";

// Icon Mapping
const icons = {
  Dashboard: <Dashboard />,
  ListAlt: <ListAlt />,
  Folder: <InsertDriveFile />,
  StarBorder: <StarBorder />,
};

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  // Filtering menu items based on search
  const filteredMenuItems = sidebarData.menuItems.filter((menu) =>
    menu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (menu.subMenu &&
      menu.subMenu.some((subItem) =>
        subItem.toLowerCase().includes(searchTerm.toLowerCase())
      ))
  );

  return (
    <Drawer variant="permanent" sx={sidebarStyles.drawer}>
      {/* Logo Section */}
      <Box sx={sidebarStyles.logoContainer}>
        <img src={logo} alt="Logo" style={sidebarStyles.logo} />
        <Typography variant="h6" sx={{ ml: 1 }}>
          {sidebarData.appName}
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box sx={sidebarStyles.searchContainer}>
        <Search sx={{ color: "gray" }} />
        <InputBase
          placeholder="Search..."
          sx={{ ml: 1, color: "#FFFFFFB2", flex: 1 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Divider />

      {/* Sidebar Menu */}
      <List>
        {filteredMenuItems.map((menu) => (
          <React.Fragment key={menu.name}>
            {/* Main Menu Item */}
            <ListItemButton
              onClick={menu.subMenu ? () => handleToggle(menu.name) : undefined}
              component={!menu.subMenu ? Link : "div"}
              to={!menu.subMenu ? `/${menu.name.toLowerCase().replace(/\s+/g, "-")}` : undefined}
              sx={sidebarStyles.listItem}
            >
              <ListItemIcon sx={{ color: "#FFFFFFB2" }}>
                {icons[menu.icon] || <InsertDriveFile />}
              </ListItemIcon>
              <ListItemText primary={menu.name} />
              {menu.subMenu && (openMenus[menu.name] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {/* Submenu Items */}
            {menu.subMenu && (
              <Collapse in={openMenus[menu.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={sidebarStyles.hierarchyContainer}>
                  {menu.subMenu
                    .filter((subItem) =>
                      subItem.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((subItem) => (
                      <ListItemButton
                        key={subItem}
                        component={Link}
                        to={`/${menu.name.toLowerCase().replace(/\s+/g, "-")}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        sx={sidebarStyles.subMenuItem}
                      >
                        <ListItemText primary={subItem} />
                      </ListItemButton>
                    ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
