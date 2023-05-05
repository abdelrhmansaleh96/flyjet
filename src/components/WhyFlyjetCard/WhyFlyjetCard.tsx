import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: string;
  dir: "left" | "right";
};

const WhyFlyjetCard = ({ title, description, image, dir }: Props) => {
  return (
    <Stack
      direction={dir === "left" ? "row" : "row-reverse"}
      spacing={12}
      alignItems="center"
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          height: "350px",
          width: "350px",
          overflow: "hidden",
          borderRadius: "50px",

          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <motion.img
          whileHover={{
            scale: 1.1,
          }}
          src={image}
          alt={title}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            margin: "1rem 0",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Stack>
  );
};

export default WhyFlyjetCard;
