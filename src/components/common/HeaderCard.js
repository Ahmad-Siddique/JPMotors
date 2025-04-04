import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";

const HeaderCard = () => {
  const { title, description, breadcrumb } = useSelector((state) => state.headerCard);

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        padding: "16px 24px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Left Side: Title & Description */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "24px" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>

      {/* Right Side: Breadcrumbs */}
      <Breadcrumbs   eadcrumbs separator=" / " aria-label="breadcrumb">
        <Link href="/" sx={{ display: "flex", alignItems: "center", color: "gray", textDecoration: "none" }}>
          <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
          Home
        </Link>
        {breadcrumb.map((item, index) => (
          <Typography key={index} color="primary">
            {item}
          </Typography>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default HeaderCard;
