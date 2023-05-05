import {
  Box,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { AiFillMedicineBox, AiFillStar } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import aboutUsImage from "../../assets/images/aboutUs.jpg";
import visionImage from "../../assets/images/vision.jpg";
import AnimationX from "../../components/Animation/AnimationX";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import OurTeam from "../../components/OurTeam/OurTeam";
import RequirementCard from "../../components/RequirementCard/RequirementCard";
import TextCard from "../../components/TextCard/TextCard";
import WhyFlyjetCard from "../../components/WhyFlyjetCard/WhyFlyjetCard";
import WhySouthAfricaCard from "../../components/WhySouthAfricaCard/WhySouthAfricaCard";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className={styles.home}>
      <motion.section
        className={styles.banner}
        id="banner"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
      >
        <HomeBanner />
      </motion.section>
      <Container
        maxWidth="xl"
        sx={{
          padding: "2rem 0",
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={12}
          divider={
            <Box sx={{ width: "100%" }}>
              <Divider
                orientation="horizontal"
                flexItem
                sx={{
                  width: "70%",
                  margin: "0 auto",
                }}
              />
            </Box>
          }
        >
          <section id="aboutUs">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <AnimationX dir={language === "en" ? 1 : 2}>
                  <TextCard
                    title={t("aboutUs.title")}
                    content={t("aboutUs.desc")}
                  />
                </AnimationX>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  img: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "3rem",
                    boxShadow: "2px 4px 30px 0px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <AnimationX dir={language === "en" ? 2 : 1}>
                  <img src={aboutUsImage} alt="about-us image" />
                </AnimationX>
              </Grid>
            </Grid>
          </section>

          <section id="vision&Mission">
            <Grid container spacing={4} rowGap={5}>
              <Grid item xs={12} md={6}>
                <AnimationX dir={language === "en" ? 1 : 2}>
                  <TextCard
                    height={true}
                    title={t("vision.title")}
                    content={t("vision.desc")}
                  />
                </AnimationX>
              </Grid>
              <Grid item xs={12} md={6}>
                <AnimationX dir={language === "en" ? 2 : 1}>
                  <div className={styles.imageContainer}>
                    <img src={visionImage} alt="vision-image" />
                  </div>
                </AnimationX>
              </Grid>
              <Grid item xs={12} md={6}>
                <AnimationX dir={language === "en" ? 1 : 2}>
                  <div className={styles.imageContainer}>
                    <img src={visionImage} alt="vision-image" />
                  </div>
                </AnimationX>
              </Grid>
              <Grid item xs={12} md={6}>
                <AnimationX dir={language === "en" ? 2 : 1}>
                  <TextCard
                    height={true}
                    title={t("mission.title")}
                    content={t("mission.desc")}
                  />
                </AnimationX>
              </Grid>
            </Grid>
          </section>

          <section id="studying">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <AnimationX dir={language === "en" ? 1 : 2}>
                  <TextCard
                    title={t("studying.title")}
                    content={t("studying.desc")}
                  />
                </AnimationX>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  img: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "3rem",
                    boxShadow: "2px 4px 30px 0px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <AnimationX dir={language === "en" ? 2 : 1}>
                  <img src={aboutUsImage} alt="about-us image" />
                </AnimationX>
              </Grid>
            </Grid>
          </section>

          <section id="theoreticalSubjects">
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: "4rem",
                fontWeight: "700",
                color: "primary.light",
              }}
            >
              {t("theoreticalStudy.title")}{" "}
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "2rem",
              }}
            >
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.1")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.2")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.3")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.4")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.5")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.6")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.7")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.8")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("theoreticalStudy.9")}
                  />
                </ListItem>
              </Grid>
            </Grid>
          </section>

          <section id="practicalStudy">
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: "4rem",
                fontWeight: "700",
                color: "primary.light",
              }}
            >
              {t("practicalStudy.title")}{" "}
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "2rem",
              }}
            >
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("practicalStudy.ppl")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("practicalStudy.nr")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("practicalStudy.ir")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("practicalStudy.me")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("practicalStudy.cpl")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("practicalStudy.atpl")}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      color: "secondary.main",
                      minWidth: "unset",
                      "& svg": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <AiFillStar />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "primary.main",
                      "& .MuiTypography-root": {
                        fontSize: "1.8rem",
                        fontWeight: "400",
                        marginLeft: "5px",
                      },
                    }}
                    primary={t("practicalStudy.instructorRating")}
                  />
                </ListItem>
              </Grid>
            </Grid>
          </section>

          <section id="why-south-africa">
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: "4rem",
                fontWeight: "700",
                color: "primary.main",
              }}
            >
              {t("whySouthAfrica.title")}
            </Typography>
            <Stack
              direction="column"
              alignItems="center"
              spacing={6}
              sx={{
                marginTop: "2rem",
              }}
            >
              <WhySouthAfricaCard
                title={t("whySouthAfrica.1.title")}
                description={t("whySouthAfrica.1.desc")}
                image="https://flyjeteg.com/wp-content/uploads/elementor/thumbs/s3-q15icypnoioipx22i2ccp78gztkqrx0xelcngmv77o.png"
              />
              <WhySouthAfricaCard
                title={t("whySouthAfrica.2.title")}
                description={t("whySouthAfrica.2.desc")}
                image="https://flyjeteg.com/wp-content/uploads/elementor/thumbs/Mask-Group-46-1-q15ibyzsgtbmgqhyamwj2g8yf6gsnf34lok784c5s4.jpg"
              />

              <WhySouthAfricaCard
                title={t("whySouthAfrica.3.title")}
                description={t("whySouthAfrica.3.desc")}
                image="https://flyjeteg.com/wp-content/uploads/elementor/thumbs/high-spirited-airline-passenger-with-cellphone-her-hand-sitting-couch-by-window-q15ibsex4z2m7grid2252zwq9hd85jd08rzsv6lwzo.jpg"
              />
              <WhySouthAfricaCard
                title={t("whySouthAfrica.4.title")}
                description={t("whySouthAfrica.4.desc")}
                image="https://flyjeteg.com/wp-content/uploads/elementor/thumbs/Mask-Group-59-q15ic0vguhe73yf7znps7frvly7j2tal9xv66o9dfo.jpg"
              />
            </Stack>
          </section>

          <section id="requirements">
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: "4rem",
                fontWeight: "700",
                color: "primary.main",
              }}
            >
              {t("requirements.title")}
            </Typography>
            <Grid
              container
              sx={{
                marginTop: "2rem",
              }}
            >
              <RequirementCard
                icon={<GiSandsOfTime />}
                title={t("requirements.1")}
              />
              <RequirementCard
                icon={<IoSchoolSharp />}
                title={t("requirements.2")}
              />
              <RequirementCard
                icon={<AiFillMedicineBox />}
                title={t("requirements.3")}
              />
              <RequirementCard
                icon={<RiEnglishInput />}
                title={t("requirements.4")}
              />
            </Grid>
          </section>

          <section id="why-flyjet">
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: "4rem",
                fontWeight: "700",
                color: "primary.light",
              }}
            >
              {t("whyFlyjet.title")}{" "}
            </Typography>
            <div ref={ref}>
              <Stack
                direction="column"
                spacing={4}
                alignItems="center"
                sx={{
                  position: "relative",
                }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "2px",
                    height: "100%",
                    backgroundColor: "gray",
                    scaleY: scrollYProgress,
                  }}
                ></motion.div>
                <WhyFlyjetCard
                  dir="left"
                  title={t("whyFlyjet.1.title")}
                  description={t("whyFlyjet.1.desc")}
                  image="https://flyjeteg.com/wp-content/uploads/2023/01/Baron.jpg"
                />
                <WhyFlyjetCard
                  dir="right"
                  title={t("whyFlyjet.2.title")}
                  description={t("whyFlyjet.2.desc")}
                  image="https://flyjeteg.com/wp-content/uploads/2021/12/hist-2-min.png"
                />
                <WhyFlyjetCard
                  dir="left"
                  title={t("whyFlyjet.3.title")}
                  description={t("whyFlyjet.3.desc")}
                  image="https://flyjeteg.com/wp-content/uploads/2023/01/Baron.jpg"
                />
              </Stack>
            </div>
          </section>

          <section id="ourTeam">
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: "4rem",
                fontWeight: "700",
                color: "primary.light",
              }}
            >
              {t("ourTeam.title")}{" "}
            </Typography>
            <OurTeam />
          </section>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
