// ModelCard.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
} from "@mui/material";

const ModelCard = ({ model }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const displayText = expanded ? model.description : model.description.slice(0, 200) + (model.description.length > 200 ? "..." : "");


  return (
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
          height: 190,
        }}
      >
        <CardMedia
          component="img"
          image={model.logo}
          alt="AI Logo Image"
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </Box>

      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="h6" gutterBottom>
          {model.title}
        </Typography>
        {/* <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          {displayText}
        </Typography> */}
           <Box>
      <Typography variant="body2">
        {displayText}
      </Typography>
      {model.description.length > 200 && (
        <Button onClick={toggleExpanded} size="small">
          {expanded ? "View Less" : "View More"}
        </Button>
      )}
    </Box>
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
};

export default ModelCard;
