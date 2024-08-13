import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const product = {
  id: 1,
  name: "Football Field Pencil Case, Soccer Field Zipper Pouch, Kid's Pencil Case, Back to School, Sport Lover Gift, Student Gift Idea, Gift for Kids",
  image: "/10.png",
  price: "USD 19.00",
  freeShipping: true,
  rating: 4.5,
  reviews: 224,
};

const ProductCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        p: 2,
        boxShadow: "none",
        width: "auto",
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box sx={{ position: "relative", width: "150px", height: "150px" }}>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          image={product.image}
          alt={product.name}
        />
        {(hovered || liked) && (
          <IconButton
            onClick={handleLike}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "white",
              zIndex: 1,
            }}
          >
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        )}
      </Box>

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Typography variant="body2" color="textSecondary">
          afraful ★★★★★ ({product.reviews})
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </Typography>
        <Typography variant="h6" color="textPrimary">
          {product.price}
        </Typography>
        {product.freeShipping && (
          <Typography variant="body2" color="success.main">
            FREE shipping
          </Typography>
        )}
        <Button
          size="small"
          variant="outlined"
          color="inherit"
          sx={{ mt: 2, borderRadius: "50px", width: "fit-content" }}
        >
          Shop this item
        </Button>
      </CardContent>
    </Card>
  );
};

const SingleProduct = () => {
  return <ProductCard />;
};

export default SingleProduct;
