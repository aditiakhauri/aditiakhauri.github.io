import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        py: 3, 
        px: 4, 
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
    
        <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Aditi Akhauri © 2024
          </Typography>
        </Grid>

        {/* Right Section: Social Icons yes*/}
        <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "right" }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/aditi-akhauri/"
            target="_blank"
            sx={{ color: "white", mx: 0.5 }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/aditiakhauri"
            target="_blank"
            sx={{ color: "white", mx: 0.5 }}
          >
            <GitHubIcon />
          </IconButton>
       
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Footer;
