import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  Stack,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { FilterList, ArrowForwardIos } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SingleProduct from "./singleCard";
import ProductGrid from "./productCard";

const products = [
  {
    id: 1,
    name: "Vintage Leather 1950s Soccer Ball",
    image: "/1.png", // Replace with actual image paths
    price: "€120.00",
    originalPrice: null,
    rating: 4.8,
    reviews: 264,
    seller: "JohnWoodbridgeMakers",
  },
  {
    id: 2,
    name: "Customized Soccer Ball Name Necklace",
    image: "/22.png",
    price: "€25.42",
    originalPrice: "€31.70",
    discount: "20% off",
    rating: 4.7,
    reviews: 6200,
    seller: "DesignerNameJewelry",
  },
  {
    id: 3,
    name: "DIY Papercraft Soccer Shoes",
    image: "/3.png",
    price: "€4.85",
    originalPrice: "€8.08",
    discount: "40% off",
    rating: 4.5,
    reviews: 1300,
    seller: "PaperAmazeDigital",
  },
  {
    id: 4,
    name: "Hummel Soccer Yellow Shirt",
    image: "/4.png",
    price: "€20.30",
    originalPrice: "€29.00",
    discount: "30% off",
    rating: 4.6,
    reviews: 760,
    seller: "HotMilkVintageCom",
  },
  {
    id: 5,
    name: "Personalized Soccer Team Gift",
    image: "/5.png",
    price: "€34.67",
    originalPrice: null,
    rating: 4.9,
    reviews: 3200,
    seller: "Forheavenerssake",
  },
  {
    id: 6,
    name: "Old School Track Jacket Blue",
    image: "/6.png",
    price: "€13.20",
    originalPrice: "€22.00",
    discount: "40% off",
    rating: 4.7,
    reviews: 760,
    seller: "HotMilkVintageCom",
  },
  // Add more products as needed
];

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card
      sx={{ height: "100%", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="subtitle1" color="textPrimary">
          {product.price}
        </Typography>
        {product.originalPrice && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ textDecoration: "line-through" }}
            >
              {product.originalPrice}
            </Typography>
            <Typography variant="body2" color="error">
              {product.discount}
            </Typography>
          </Stack>
        )}
        <Rating value={product.rating} precision={0.1} readOnly size="small" />
        <Typography variant="caption" color="textSecondary">
          ({product.reviews})
        </Typography>
        <Typography variant="caption" display="block" color="textSecondary">
          {product.seller}
        </Typography>
      </CardContent>
      {(hovered || liked) && (
        <IconButton
          onClick={handleLike}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "white",
          }}
        >
          {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      )}
    </Card>
  );
};

function ProductList() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: 2,
      }}
    >
      <SingleProduct />
      <Divider sx={{ marginY: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <IconButton
          size="small"
          sx={{ border: "solid thin black", borderRadius: "50px" }}
        >
          <FilterList />
          {!isSmallScreen && (
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              All Filters
            </Typography>
          )}
        </IconButton>
        <Typography
          variant="caption"
          sx={{ marginLeft: "auto", marginRight: 1 }}
        >
          1,000+ results, with Ads
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          size="small"
          sx={{ borderRadius: "50px", fontSize: "12px" }}
          endIcon={<ArrowDropDownIcon fontSize="small" />}
        >
          Sort by: Most relevant
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h6">Etsy's Picks</Typography>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ borderRadius: "50px" }}
          size="small"
          endIcon={<ArrowDropDownIcon fontSize="small" />}
        >
          See more
        </Button>
      </Box>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ marginY: 2 }} />
      <ProductGrid />
    </Box>
  );
}

export default ProductList;
