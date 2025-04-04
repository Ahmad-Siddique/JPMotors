import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const BreadcrumbNav = ({ currentPage, parentPage }) => {
  return (
    <Breadcrumbs separator=" / " aria-label="breadcrumb">
      {/* Home Link */}
      <Link href="/" sx={{ display: "flex", alignItems: "center", color: "gray", textDecoration: "none" }}>
        <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
        Home
      </Link>

      {/* Parent Page (If Provided) */}
      {parentPage && (
        <Link href={`/${parentPage.toLowerCase().replace(" ", "-")}`} sx={{ color: "gray", textDecoration: "none" }}>
          {parentPage}
        </Link>
      )}

      {/* Current Page */}
      <Typography color="primary">{currentPage}</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbNav;
