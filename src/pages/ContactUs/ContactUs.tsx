import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
import { Container, Grid, Box } from "@mui/material";
import TalkToUs from "../../components/Contact/TalkToUs";
import Map from "../../components/Map/Map";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContactInfo from "../../components/Contact/ContactInfo";
import Divider from "@mui/material/Divider";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Banner from "../../components/BannerTwo/BannerTwo";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavLinks from "../../components/NavLinks/NavLinks";
import { FaPlane } from "react-icons/fa";
const ContactUs = () => {
  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<FaPlane />}
        sx={{
          fontFamily: "'Poltawski Nowy', serif",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 2,
          color: "#fff",
          fontWeight: 600,
        }}
      >
        <NavLinks to={"/"} text={"Home"} />
        <Typography
          sx={{ fontSize: "clamp(.8rem, 1.5vw, 1.4rem)", color: "red" }}
        >
          Contacts
        </Typography>
      </Breadcrumbs>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Banner bannerHeight={"60vh"} />
        <Container
          maxWidth="xl"
          sx={{
            padding: "2rem 0",
          }}
        >
          <Grid container spacing={1} xs={12}>
            <Grid
              item
              xl={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Map />
            </Grid>
            <Grid
              item
              xl={6}
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={4}>
                <Typography variant="h2">Contact Us</Typography>
                <Stack
                  spacing={3}
                  divider={<Divider orientation="horizontal" flexItem />}
                >
                  <Stack direction="row" alignItems={"center"} spacing={2}>
                    <ContactInfo
                      title="Loaction"
                      info="17 Markaz Al Maalomat St, Sheraton, Heliopolis, Cairo Governorate, Egypt"
                    >
                      <PinDropOutlinedIcon sx={{ color: "secondary.main" }} />
                    </ContactInfo>
                  </Stack>

                  <Stack direction="row" alignItems={"center"} spacing={2}>
                    <ContactInfo
                      title="Phone"
                      phone1="(+2)0222661444"
                      phone2="(+2)01004484445"
                      phone3="(+2)01279999033"
                    >
                      <LocalPhoneIcon sx={{ color: "secondary.main" }} />
                    </ContactInfo>
                  </Stack>
                  <Stack direction="row" alignItems={"center"} spacing={2}>
                    <ContactInfo title="Email" info="info@flyjet.com">
                      <EmailOutlinedIcon sx={{ color: "secondary.main" }} />
                    </ContactInfo>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ bgcolor: "custom.light" }}>
          <Container
            maxWidth="xl"
            sx={{
              padding: "4rem 0",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xl={4} xs={12}>
                <TalkToUs />
              </Grid>

              <Grid item xl={8} xs={12}>
                <ContactForm />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
