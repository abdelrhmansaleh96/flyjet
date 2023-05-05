import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface props {
  children?: JSX.Element;
  title?: string;
  info?: string;
  phone1?: string;
  phone2?: string;
  phone3?: string;
}

const ContactInfo = (props: props) => {
  return (
    <>
      <Avatar sx={{ bgcolor: "custom.light", mx: 1, width: 64, height: 64 }}>
        {props.children}
      </Avatar>
      <Stack>
        <Typography fontWeight={500} fontSize={22}>
          {props.title}
        </Typography>
        <Typography
          sx={{ color: "secondary.main", width: "70%" }}
          fontSize={14}
        >
          {props.info}
        </Typography>
        <Typography sx={{ color: "secondary.main" }} fontSize={14}>
          {props.phone1}
        </Typography>
        <Typography sx={{ color: "secondary.main" }} fontSize={14}>
          {props.phone2}
        </Typography>
        <Typography sx={{ color: "secondary.main" }} fontSize={14}>
          {props.phone3}
        </Typography>
      </Stack>
    </>
  );
};

export default ContactInfo;
