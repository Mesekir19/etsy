import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NavBar from "../components/navBar";
import ImageCarousel from "../components/image";
import Reviews from "../components/reviews";
import BreadcrumbNavigation from "../components/breadCrumb";
import CheckIcon from "@mui/icons-material/Check";
import BackHandIcon from "@mui/icons-material/BackHand";
import LinkIcon from "@mui/icons-material/Link";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const ProductPage = () => {
  const images = ["/2.PNG", "/own.PNG", "/success.PNG"]; // Your images

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <NavBar />
      {isSmallScreen ? (
        <></>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <BreadcrumbNavigation />
        </Box>
      )}

      <Grid container spacing={2} padding={2}>
        {/* Image Carousel */}
        <Grid item xs={12} md={8} order={{ xs: 1, md: 1 }}>
          <ImageCarousel />
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={4} order={{ xs: 2, md: 2 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "red",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              gutterBottom
            >
              Rare find
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              USD 50.79
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mb: 2 }}
              gutterBottom
            >
              Local taxes included (where applicable)
            </Typography>
            <Typography variant="body1" gutterBottom>
              Soccer Ball Necklace-Football Beaded Necklace-Soccer Fans
              Gift-Soccer Ball Charm Necklace-Ball Charm-Football Charm
              Necklace-Green Necklace
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ display: "flex", justifyContent: "start" }}
              gutterBottom
            >
              DreamBeadsDovi
              <Rating value={5} size="small" sx={{ color: "black" }} readOnly />
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ display: "flex", justifyContent: "start" }}
              gutterBottom
            >
              <CheckIcon sx={{ width: "20px", height: "20px" }} />
              Returns & exchanges accepted
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, backgroundColor: "black", borderRadius: "50px" }}
            >
              Add to cart
            </Button>

            <Divider sx={{ my: 3 }} />

            {/* Item Details */}
            <Box sx={{  justifyContent: "start" }}>
              <Typography variant="h6" gutterBottom>
                Item details
              </Typography>
              <Typography variant="h6" gutterBottom>
                Highlights
              </Typography>
              <Typography variant="body2" gutterBottom>
                <BackHandIcon sx={{ width: "20px", height: "20px" }} />
                <strong>Made by:</strong> DreamBeadsDovi
              </Typography>
              <Typography variant="body2" gutterBottom>
                <AutoAwesomeIcon sx={{ width: "20px", height: "20px" }} />
                <strong>Materials:</strong> Glass
              </Typography>
              <Typography variant="body2" gutterBottom>
                <LinkIcon sx={{ width: "20px", height: "20px" }} />
                <strong>Chain style:</strong> Bead
              </Typography>
              <Typography variant="body2" gutterBottom>
                <SquareFootIcon sx={{ width: "20px", height: "20px" }} />
                <strong>Necklace length:</strong> 42 Centimeters
              </Typography>
              <Typography variant="h6" gutterBottom>
                About this item
              </Typography>
              <Typography variant="body2" gutterBottom>
                If you are looking for a thoughtful, exquisite, and customizable
                gift for your bridesmaid, then this jewelry box is the perfect
                choice. This mini jewelry box is printed with her birth month
                flower and name. It is designed to store multiple rings,
                earrings, delicate bracelets, or necklaces, making it ideal for
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Reviews */}
        <Grid
          item
          xs={12}
          md={8}
          order={{ xs: 3, md: 2 }}
          sx={{
            mt: { xs: 2, md: -30 }, // Negative margin on large screens
          }}
        >
          <Reviews />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
