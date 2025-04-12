import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const handleToggle = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  // Check if a menu item is selected
  const isSelected = (menuPath) => {
    return (
      location.pathname === menuPath ||
      location.pathname.startsWith(menuPath + "/")
    );
  };

  // Filtering menu items based on search
  const filteredMenuItems = sidebarData.menuItems.filter(
    (menu) =>
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
        {filteredMenuItems.map((menu) => {
          const menuPath = `/${menu.name.toLowerCase().replace(/\s+/g, "-")}`;
          const isMenuSelected = isSelected(menuPath);

          return (
            <React.Fragment key={menu.name}>
              {/* Main Menu Item */}
              <ListItemButton
                onClick={
                  menu.subMenu ? () => handleToggle(menu.name) : undefined
                }
                component={!menu.subMenu ? Link : "div"}
                to={!menu.subMenu ? menuPath : undefined}
                sx={{
                  ...sidebarStyles.listItem,
                  backgroundColor: isMenuSelected
                    ? "rgba(33, 150, 243, 0.12)" // Light blue background
                    : "transparent",
                }}
              >
                <ListItemIcon
                  sx={{ color: isMenuSelected ? "#2196F3" : "#FFFFFFB2" }} // Blue icon when selected
                >
                  {icons[menu.icon] || <InsertDriveFile />}
                </ListItemIcon>
                <ListItemText
                  primary={menu.name}
                  sx={{
                    "& .MuiTypography-root": {
                      color: isMenuSelected ? "#2196F3" : "#FFFFFFB2", // Blue text when selected
                    },
                  }}
                />
                {menu.subMenu &&
                  (openMenus[menu.name] ? (
                    <ExpandLess
                      sx={{ color: isMenuSelected ? "#2196F3" : "#FFFFFFB2" }}
                    />
                  ) : (
                    <ExpandMore
                      sx={{ color: isMenuSelected ? "#2196F3" : "#FFFFFFB2" }}
                    />
                  ))}
              </ListItemButton>

              {/* Submenu Items */}
              {menu.subMenu && (
                <Collapse
                  in={openMenus[menu.name]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    sx={sidebarStyles.hierarchyContainer}
                  >
                    {menu.subMenu
                      .filter((subItem) =>
                        subItem.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((subItem) => {
                        const subItemPath = `${menuPath}/${subItem
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`;
                        const isSubItemSelected = isSelected(subItemPath);

                        return (
                          <ListItemButton
                            key={subItem}
                            component={Link}
                            to={subItemPath}
                            sx={{
                              ...sidebarStyles.subMenuItem,
                              backgroundColor: isSubItemSelected
                                ? "rgba(33, 150, 243, 0.12)" // Light blue background
                                : "transparent",
                            }}
                          >
                            <ListItemText
                              primary={subItem}
                              sx={{
                                "& .MuiTypography-root": {
                                  color: isSubItemSelected
                                    ? "#2196F3" // Blue text when selected
                                    : "#FFFFFFB2",
                                },
                              }}
                            />
                          </ListItemButton>
                        );
                      })}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
