import { Box, Fab, Fade, Paper, useScrollTrigger } from "@mui/material";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  //   children: React.ReactElement;
}

function ScrollToTopBtn(props: Props) {
  const { window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Paper
          elevation={2}
          sx={{
            backgroundColor: "secondary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "3rem",
            height: "3rem",
            cursor: "pointer",
            borderRadius: "1rem",
            "& svg": {
              color: "white",
              fontSize: "2.5rem",
            },
          }}
        >
          <MdOutlineKeyboardArrowUp />
        </Paper>
      </Box>
    </Fade>
  );
}

export default ScrollToTopBtn;
