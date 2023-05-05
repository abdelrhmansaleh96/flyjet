import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
interface props {
  children?: JSX.Element;
  title?: string;
  info?: string;
  num?: string;
}
const AboutCard = (props: props) => {
  return (
    <>
      <Card sx={{ width: 375, minHeight: 300, py: 2, px: 1, m: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 72, opacity: 0.5, fontWeight: 500 }}>
            {props?.num}
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
            {props?.title}
          </Typography>
          <Typography sx={{ fontSize: 18, color: "secondary.main", mt: 3 }}>
            {props?.info}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutCard;
