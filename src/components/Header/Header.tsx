import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";
import logo from "../../assets/images/logo-main.png";
import { motion } from "framer-motion";
import { useScrollTrigger } from "@mui/material";
import { useMainContext } from "../../context/mainContext";
import { useTranslation } from "react-i18next";

interface Props {
  window?: () => Window;
}

function Header(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;
  const { t, i18n } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const { changeLanguage } = useMainContext();
  const pages = [
    t("header.home"),
    t("header.aboutUs"),
    t("header.flightTraining"),
    t("header.Services"),
    t("header.Blog"),
    t("header.Media"),
    t("header.contact"),
    t("header.login"),
  ];
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        textAlign: "center",
        backgroundColor: "transparent",
        backgroundImage: " linear-gradient(180deg, #030341 0%, #5F0018 100%);",
      }}
    >
      <Box sx={{ my: 2 }}>
        <img src={logo} alt="logo" />
      </Box>
      <Divider
        sx={{
          backgroundColor: "white",
        }}
      />
      <List>
        {pages.map((item) => (
          <ListItem
            sx={{
              my: 2,
              color: "white",
            }}
            key={item}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "95vw",
          }}
        >
          <Toolbar
            id="back-to-top-anchor"
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 2,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <AiOutlineMenu />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                img: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    opacity: 0.4,
                  },
                },
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "240px",
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: "16px" }}>
              {pages.map((page) => (
                <Button
                  key={page}
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
                    {page}
                  </Typography>
                </Button>
              ))}
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
                onClick={() => changeLanguage()}
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
                  {i18n.language === "en" ? "AR" : "EN"}
                </Typography>
              </Button>

              <Box>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<FaPlane />}
                  sx={{
                    my: 2,
                    height: "60px",
                    borderRadius: "30px",
                    svg: {
                      color: "white",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    textTransform="none"
                    color={"white"}
                  >
                    {t("header.applyNow")}
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}
export default Header;
