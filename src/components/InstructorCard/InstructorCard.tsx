import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  name: string;
  title: string;
  image: string;
};

const InstructorCard = ({ name, title, image }: Props) => {
  return (
    <Stack
      direction="column"
      sx={{
        cursor: "pointer",
        margin: "3rem 0",
        width: "270px",
        height: "360px",
        borderRadius: "25px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        backgroundColor: "#f9f6f6",
      }}
    >
      <Box
        sx={{
          flex: 2,
          overflow: "hidden",
          backgroundColor: "#8eddff33",

          "& img": {
            width: "100%",
            height: "100%",
            overflow: "hidden",

            objectFit: "cover",
          },
        }}
      >
        <motion.img
          whileHover={{
            scale: 1.1,
          }}
          src={image}
          alt={name}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "primary.main",
            transition: "all 0.3s ease-in-out",
            margin: "1rem 0",
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          textAlign="center"
          variant="h3"
          sx={{ fontSize: "1rem", fontWeight: "400", color: "primary.main" }}
        >
          {title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default InstructorCard;
