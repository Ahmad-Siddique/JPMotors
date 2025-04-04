const sidebarStyles = {
  drawer: {
    width: 250,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 250,
      boxSizing: "border-box",
      backgroundColor: "#121212",
      color: "#fff",
    },
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
  },

  logo: {
    height: 35,
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    mx: 2,
    my: 1,
    px: 2,
    py: 1,
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
  },

  listItem: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      "& .MuiListItemIcon-root, & .MuiTypography-root": {
        color: "#1976D2",
      },
    },
  },

  subMenuItem: {
    fontSize:"14px",
    paddingLeft: "32px",
    position: "relative",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      "& .MuiTypography-root": {
        color: "#1976D2",
      },
    },
  },

  hierarchyContainer: {
    position: "relative",
    paddingLeft: "16px",
  },

  hierarchyLineVertical: {
    position: "absolute",
    left: "12px",
    top: 0,
    width: "2px",
    height: "100%",
    backgroundColor: "#90CAF9",
  },

  hierarchyLineHorizontal: {
    position: "absolute",
    left: "12px",
    top: "50%",
    width: "20px",
    height: "2px",
    backgroundColor: "#fff",
  },
};

export default sidebarStyles;
