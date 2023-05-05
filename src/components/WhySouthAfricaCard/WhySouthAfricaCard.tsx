import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
};

const WhySouthAfricaCard = (props: Props) => {
  return (
    <Box
      sx={{
        padding: "1rem 2rem",
        borderRadius: "50px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        backgroundColor: "primary.main",
        width: "80%",
      }}
    >
      {" "}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          sx={{
            width: "250px",
            height: "250px",
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20%",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            },
          }}
        >
          <img src={props.image} alt="first-image" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "secondary.main", fontWeight: "700" }}
          >
            {props.title}{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "primary.light",
              maxWidth: "720px",
              fontSize: "1.2rem",
            }}
          >
            {props.description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default WhySouthAfricaCard;
