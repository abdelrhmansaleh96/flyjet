import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const TalkToUs = () => {
  return (
    <>
      <Typography variant="h3" color={"custom.secondary"}>
        Talk to us
      </Typography>
      <Typography variant="h2" marginY={2}>
        Any Question? <br />
        Fell Free to Contact
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique enim
        sequi omnis iure consequatur corporis?
      </Typography>
      <Stack direction="row" spacing={1} marginY={2}>
        <a href="">
          <FacebookRoundedIcon
            sx={{ color: "custom.secondary", fontSize: 36 }}
          />
        </a>
        <a href="">
          <LinkedInIcon sx={{ color: "custom.secondary", fontSize: 36 }} />
        </a>
        <a href="">
          <InstagramIcon sx={{ color: "custom.secondary", fontSize: 36 }} />
        </a>
        <a href="">
          <TwitterIcon sx={{ color: "custom.secondary", fontSize: 36 }} />
        </a>
      </Stack>
    </>
  );
};

export default TalkToUs;
