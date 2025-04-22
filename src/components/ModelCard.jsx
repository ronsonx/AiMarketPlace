// ModelCard.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
} from "@mui/material";

const ModelCard = ({ model }) => (
  <Card
    variant="outlined"
    sx={{ maxWidth: 350, borderRadius: 3, boxShadow: 3 }}
  >
    <Box
      sx={{
        backgroundColor: "#FFCDD2", // Light red background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 0,
      }}
    >
      <CardMedia
        component="img"
        image="https://afw-live.s3.amazonaws.com/model/model_306/Image_models_705x268_15.png?w=640&q=75" // Replace with your actual image path
        alt="Zephyr AI"
      />
    </Box>

    <CardContent sx={{ textAlign: "left" }}>
      <Typography variant="h6" gutterBottom>
        {model.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ marginBottom: 2 }}
      >
        {model.description}
      </Typography>
      {/* <Chip label="Hello" size="small" sx={{ mt: 1 }} /> */}
      <Button
        variant="outlined"
        sx={{ borderRadius: 5, mt: 1 }}
        onClick={() => window.open(model.buttonLink, "_blank")}
      >
        Try it out
      </Button>
    </CardContent>
  </Card>
);

export default ModelCard;
