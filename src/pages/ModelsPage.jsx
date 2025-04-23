// ModelsPage.js
import React, { useState } from "react";
import {
  Pagination,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Button,
} from "@mui/material";
import models from "../common/constant";
import ModelCard from "../components/ModelCard";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const ModelsPage = () => {
  const [page, setPage] = useState(1);
  const modelsPerPage = 3;
  const totalPages = Math.ceil(models.length / modelsPerPage);

  const [searchModal, setSearchModal] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (event) => {
    setSearchModal(event.target.value);
  };

  const displayedModels = models.slice(
    (page - 1) * modelsPerPage,
    page * modelsPerPage
  );

  const filteredModels = displayedModels.filter((model) =>
    model.title.toLowerCase().includes(searchModal.toLowerCase())
  );

  return (
    <>
     {/* Main Conatiner Title */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: 100,
            lineHeight: "normal",
            textTransform: "uppercase",
          }}
        >
          AI Solution For Application Development
        </Typography>
      </Box>
      {/* Serach bar */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", marginTop: 1, gap: 1 }}
      >
        <TextField
          variant="outlined"
          placeholder="Search models"
          fullWidth
          value={searchModal}
          onChange={handleSearch}
          sx={{
            maxWidth: 500,
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            height: "56px",
            whiteSpace: "nowrap",
            bgcolor: "#81B1CE",
            color: "white",
            outlineColor: "#81B1CE",
            borderRadius: "8px",
          }} // matching TextField height
        >
          Filters
        </Button>
      </Box>
        {/* main container tiles  */}
      <Container sx={{ py: 5 }}>
        <Grid sx={{ display: "flex" }} container spacing={{ xs: 2, md: 3 }}>
          {filteredModels.map((model) => (
            <ModelCard model={model} />
          ))}
        </Grid>
        <Grid container justifyContent="center" sx={{ mt: 4 ,mb:0 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Grid>
      </Container>
    </>
  );
};

export default ModelsPage;
