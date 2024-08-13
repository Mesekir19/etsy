import React, { useState } from "react";
import {
  Box,
  IconButton,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import FlagIcon from "@mui/icons-material/Flag";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
const imageList = [
  "/12.png",
  "/13.png",
  "/11.png",
  "/14.png",
  "/15.png",
  "/12.png",
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  // Calculate the height for each thumbnail
  const thumbnailHeight = 400 / imageList.length;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 750,
          margin: "0 auto",
          display: "flex",
        }}
      >
        {!isSmallScreen && (
          <Grid
            container
            spacing={1}
            sx={{
              width: "20%",
              marginRight: 2,
              height: 400, // Ensure the thumbnails container is level with the main image
            }}
          >
            {imageList.map((image, index) => (
              <Grid
                item
                key={index}
                xs={12}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  height: thumbnailHeight, // Set dynamic height for each thumbnail
                  cursor: "pointer",
                }}
              >
                <Paper
                  elevation={index === currentIndex ? 4 : 1}
                  sx={{
                    opacity: index === currentIndex ? 1 : 0.5,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "100%",
                      objectFit: "contain",
                      border:
                        index === currentIndex ? "2px solid green" : "none",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            width: isSmallScreen ? "100%" : "80%",
            height: 400,
          }}
        >
          {/* Main Image */}
          <img
            src={imageList[currentIndex]}
            alt={`Product Image ${currentIndex + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Etsy's Pick Badge */}
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              backgroundColor: "#f4511e", // Orange background
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            <AutoAwesomeIcon sx={{ width: "15px", height: "15px" }} /> Etsy's
            Pick
          </Typography>

          {/* Like Icon */}
          <IconButton
            onClick={toggleLike}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "8px",
            }}
          >
            {liked ? (
              <Favorite sx={{ color: "#f4511e" }} />
            ) : (
              <FavoriteBorder sx={{ color: "#f4511e" }} />
            )}
          </IconButton>

          {/* Navigation Icons */}
          <IconButton
            onClick={handlePrevClick}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={handleNextClick}
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
          <Link
            href="/"
            sx={{
              display: "flex",
              justifyContent: "right",
              textDecoration: "underline",
              color: "black",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            <FlagIcon />
            Report this item to Etsy
          </Link>
        </Paper>
      </Box>
      <Box>
        {isSmallScreen && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            {imageList.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 10,
                  height: 10,
                  margin: "0 5px",
                  borderRadius: "50%",
                  backgroundColor: currentIndex === index ? "#f4511e" : "gray",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

export default ImageCarousel;
