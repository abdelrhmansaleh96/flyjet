import { Box, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          img: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
          "&::after": {
            content: `" "`,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1,
          },
        }}
      >
        <img src={banner} alt="banner" />
        <Typography
          variant="h1"
          fontWeight="600"
          textAlign="center"
          width={"fit-content"}
          sx={{
            fontFamily: "'Poltawski Nowy', serif",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 2,
            color: "#fff",
            textTransform: "uppercase",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            wordSpacing: ".6rem",
          }}
        >
          The Actual Aviation Vision
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
