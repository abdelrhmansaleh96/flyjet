import React from "react";
import "./Footer.scss";
import { Box, Container, Grid, Typography } from "@mui/material";
import footerImage from "../../assets/images/footer.png";
import { SocialIcon } from "react-social-icons";
import logo from "../../assets/images/logo-main.png";

const Footer = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: "custom.main",
        // backgroundColor: "transparent",
        // backgroundImage: " linear-gradient(180deg, #030341 0%, #5F0018 100%);",
        padding: "80px 0",
      }}
    >
      <div className={"bgImage"}>
        <img src={footerImage} alt="footerImage" />
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",

              gap: "2rem",
            }}
          >
            <div>
              <img src={logo} alt="logo" />
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginLeft: "3rem",
              }}
            >
              {" "}
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Egypt
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "gray", maxWidth: "300px" }}
              >
                17 Markaz Al Maalomat St, Sheraton, Heliopolis, Cairo
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <SocialIcon
                  className="socialIcon"
                  url="https://www.facebook.com/Flyjeteg"
                  target="_blank"
                  style={{ height: 35, width: 35 }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontSize: "1rem", letterSpacing: "2px" }}
            >
              All rights reserved to FLYJET
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
