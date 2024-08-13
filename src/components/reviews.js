import React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Avatar,
  Grid,
  Card,
  CardContent,
  Divider,
  IconButton,
  Rating,
} from "@mui/material";
import { CheckCircle, ArrowDropDown } from "@mui/icons-material";

const reviews = [
  {
    user: "Sue",
    date: "Aug 10, 2024",
    text: "Over the moon with my item. Looks better than I was expecting. Quality really good. Very fast delivery. Will be purchasing from this company again.",
    itemQuality: 5,
    shipping: 5,
    customerService: 5,
  },
  {
    user: "Sue",
    date: "Aug 10, 2024",
    text: "Fast delivery. Quality very good. Looks really good and the perfect size for putting some jewellery in and taking on holidays.",
    itemQuality: 5,
    shipping: 5,
    customerService: 5,
  },
  {
    user: "Sue",
    date: "Aug 10, 2024",
    text: "Fast delivery. Exactly as described. Quality very good. Really pleased with my purchase.",
    itemQuality: 5,
    shipping: 5,
    customerService: 5,
  },
];

function Reviews() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
      <Typography variant="h6" gutterBottom>
        4,750 reviews
        <Rating value={5} readOnly sx={{ color: "black" }} />
      </Typography>
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ marginY: 2 }}>
        <Tab label={`Reviews for this item (${reviews.length})`} />
        <Tab label="Reviews for this shop (4,750)" />
      </Tabs>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="subtitle1">Sort by: Suggested</Typography>
        <IconButton>
          <ArrowDropDown />
        </IconButton>
      </Box>
      {reviews.map((review, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Rating value={5} readOnly sx={{ color: "black" }} />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginBottom: 1 }}
                >
                  {review.text}
                </Typography>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">{review.user}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption" color="textSecondary">
                      {review.date}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} md={4}>
                <Grid item sx={{ display: "flex" }}>
                  <CheckCircle color="success" fontSize="small" />
                  <Typography variant="body2">Recommends this item</Typography>
                </Grid>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Grid item>
                    <Typography variant="caption">Item quality</Typography>
                    <Rating
                      value={review.itemQuality}
                      readOnly
                      size="small"
                      sx={{ color: "black" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">Shipping</Typography>
                    <Rating
                      value={review.shipping}
                      readOnly
                      size="small"
                      sx={{ color: "black" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">Customer service</Typography>
                    <Rating
                      value={review.customerService}
                      readOnly
                      size="small"
                      sx={{ color: "black" }}
                    />
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Reviews;
