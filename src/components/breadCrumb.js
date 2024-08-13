import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const BreadcrumbNavigation = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator=">"
      sx={{
        fontSize: "16px",
        color: "#000000",
        mt:2
      }}
    >
      <Link
        underline="hover"
        color="inherit"
        href="/"
        sx={{
          textDecoration: "underline",
          color: "black",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        Homepage
      </Link>
      <Link
        underline="hover"
        href="/jewelry"
        sx={{
          textDecoration: "underline",
          color: "black",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        Jewelry
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/jewelry/necklaces"
        sx={{
          textDecoration: "underline",
          color: "black",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        Necklaces
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/jewelry/necklaces"
        sx={{
          textDecoration: "underline",
          color: "black",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        Beaded Necklaces
      </Link>
    </Breadcrumbs>
  );
};

export default BreadcrumbNavigation;
