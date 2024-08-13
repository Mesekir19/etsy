import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const products = [
  {
    title: "Personalized Soccer Lamp",
    price: "€25.72",
    originalPrice: "€52.50",
    discount: "51% off",
    image: "/7.png", // Replace with your image paths
    rating: 4.8,
    reviews: 846,
    badge: "Bestseller",
  },
  {
    title: "Soccer legends poster",
    price: "€19.00",
    image: "/8.png",
    rating: 4.8,
    reviews: 175,
  },
  {
    title: "Personalized Gifts for Soccer Fan",
    price: "€36.40",
    originalPrice: "€52.00",
    discount: "30% off",
    image: "/9.png",
    rating: 4.8,
    reviews: 240,
    badge: "Popular now",
  },
  {
    title: "Custom Soccer Medal Hanger",
    price: "€23.89",
    originalPrice: "€28.11",
    discount: "15% off",
    image: "/10.png",
    rating: 4.8,
    reviews: 2400,
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
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box sx={{ position: "relative" }}>
        {product.badge && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              backgroundColor: "white",
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            <Typography variant="body2" color="textPrimary">
              {product.badge}
            </Typography>
          </Box>
        )}
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
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.rating} ★ ({product.reviews})
        </Typography>
        <Typography variant="body1" color="text.primary">
          {product.price}
        </Typography>
        {product.originalPrice && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            {product.originalPrice}
          </Typography>
        )}
        {product.discount && (
          <Typography variant="body2" color="error">
            {product.discount}
          </Typography>
        )}
        <Box sx={{ display: "flex", mt: 2 }}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ borderRadius: "50px" }}
            size="small"
          >
            Add to cart
          </Button>
          <Button variant="text" color="inherit" size="small">
            More like this <ArrowForwardIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const ProductGrid = () => (
  <Grid container spacing={2} padding={1}>
    {products.map((product, index) => (
      <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>
);

export default ProductGrid;
