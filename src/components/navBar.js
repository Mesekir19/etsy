import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GiftIcon from "@mui/icons-material/CardGiftcard";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 7,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  marginLeft: theme.spacing(3),
  flexGrow: 1,
  border: "solid thin black",
  width: "800px",
  maxWidth: "800px",
  color: "black",
  alignItems: "center",
  display: "flex",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  width: "100%",
  height: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f4511e",
  borderRadius: "50px",
  cursor: "pointer",
  margin: "3px",
}));

function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Toolbar
        sx={{
          mx: { xs: "0px", sm: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row-reverse", sm: "row" },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "#f4511e",
              fontWeight: "bold",
              marginRight: { xs: "0px", sm: "10px" },
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Etsy
          </Typography>
          <IconButton
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{
              mr: { xs: 0, sm: 2 },
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
          </IconButton>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            color: "black",
            fontSize: "0.875rem",
          }}
        >
          Categories
        </Typography>
        <Search>
          <StyledInputBase
            placeholder="Search for anything…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon style={{ color: "white" }} />
          </SearchIconWrapper>
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            color: "black",
            fontSize: "0.875rem",
          }}
        >
          Sign in
        </Typography>
        <IconButton
          size="large"
          color="inherit"
          sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
        >
          <FavoriteIcon sx={{ color: "black", fontSize: "1.2rem" }} />
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
        >
          <GiftIcon sx={{ color: "black", fontSize: "1.2rem" }} />
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
        >
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon sx={{ color: "black", fontSize: "1.2rem" }} />
          </Badge>
        </IconButton>
      </Toolbar>
      <Box
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
      >
        <Typography variant="body1" noWrap sx={{ mx: 2, color: "black" }}>
          Gift Mode
        </Typography>
        <Typography variant="body1" noWrap sx={{ mx: 2, color: "black" }}>
          Back-to-School Savings
        </Typography>
        <Typography variant="body1" noWrap sx={{ mx: 2, color: "black" }}>
          Home Favorites
        </Typography>
        <Typography variant="body1" noWrap sx={{ mx: 2, color: "black" }}>
          Fashion Finds
        </Typography>
        <Typography variant="body1" noWrap sx={{ mx: 2, color: "black" }}>
          Registry
        </Typography>
      </Box>
    </AppBar>
  );
}

export default NavBar;
