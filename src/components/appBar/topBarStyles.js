const topBarStyles = {
  appBar: {
    width: `calc(100% - 250px)`,
    ml: `250px`,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "0 16px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "#262F37",
    fontSize: "14px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700,
    letterSpacing: "0.5px",
    display: "block",
  },
  iconButton: {
    width: "24px",
    height: "24px",
  },
  profileName: {
    color: "#121212",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif",
  },
};

export default topBarStyles;
