import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";

import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <AppBar
        position="relative"
        sx={{
          backgroundColor: "#000000",
          top: "0px",
          left: 0,
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo on the left */}
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
          <img src={logo} />
          </Typography>

          {/* Right side: Home + Button */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Button
              variant="outlined"
              sx={{ color: "#FFFFFF", backgroundColor: "##000000" , borderColor :"#FFFFFF"}}
            >
             Home
            </Button>

            <Button
              variant="contained"
              sx={{ color: "#FFFFFF", backgroundColor: "#E12625" }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default Header;
