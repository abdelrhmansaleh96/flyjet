import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

interface props {
  //   children?: JSX.Element;
  text?: string;
  to?: string;
}

const NavLinks = (props: props) => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={props?.to ? props?.to : ""}>
        <Button
          sx={{
            my: 2,
            color: "white",
            display: "block",
          }}
        >
          <Typography
            textAlign="center"
            textTransform="none"
            sx={{
              fontSize: "clamp(.8rem, 1.5vw, 1.4rem)",
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            {props?.text}
          </Typography>
        </Button>
      </Link>
    </>
  );
};

export default NavLinks;
