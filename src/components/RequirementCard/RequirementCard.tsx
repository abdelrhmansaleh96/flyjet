import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;

  icon: ReactJSXElement;
};

const RequirementCard = ({ title, icon }: Props) => {
  return (
    <Grid
      sm={12}
      md={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: "1rem",
          borderRadius: "50px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          backgroundColor: "primary.main",
          width: "400px",
          height: "150px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            width: "24px",
            height: "24px",
            "& svg": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              color: "secondary.main",
            },
          }}
        >
          {icon}
        </Box>{" "}
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.2rem",
            color: "primary.light",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            fontWeight: "800",
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default RequirementCard;
