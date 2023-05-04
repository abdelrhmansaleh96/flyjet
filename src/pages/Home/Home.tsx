import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import aboutUsImage from "../../assets/images/aboutUs.jpg";
import visionImage from "../../assets/images/vision.jpg";
import AnimationScale from "../../components/Animation/AnimationScale";
import AnimationX from "../../components/Animation/AnimationX";
import Banner from "../../components/Banner/Banner";
import TextCard from "../../components/TextCard/TextCard";
import styles from "./Home.module.scss";

const Home = () => {
  const aboutUsContent: string[] = [
    "FJA is an Academy accredited by the general authority for investment no. 195-796 -FJA.It is based in the Arab Republic of Egypt and Cooperates in a full partnership in the Aviation training field with one of the most highly rated & qualified academies based in the Republic of South Africa.",
    "FJA is a highly qualified flying and ground school that has impressive credentials & substantial experience pilot trainers in civil and military aviation for more than 30 years both at nationally and internationally.",
    "FJA has been relentlessly providing comprehensive flying training for a spiring pilots & flying enthusiast. It uses modern & effective training system that matches at global standard to achieve standard, Efficient & Safe training for student pilots.",
  ];
  const studyingContent: string[] = [
    "Flyjet offers an integrated program to study civil aviation in Egypt and South Africa. The trainee obtains, through the training program, two licenses for a private pilot license (PPL) and a commercial multi-engine pilot license (CPL-ME) . Three qualifications (NR-IR-ME) are added to the license to ensure that the trainee obtains a comprehensive educational system that combines the theoretical and practical methods that qualify him theoretically, practically and behaviorally.",
    "During the course at the Academy, the student will obtain 220 hours of practical flight within an international airport to qualify him to acquire the skills of dealing with the latest radio and wireless equipment and control towers.",
    "Flyjet provides practical training and training in the system of cross-country and night flying on more than one model of modern training aircraft such as the Cessna 172, Pipier 28 single-engine and Pipier 30 multi-engine aircraft based on the conditions of the Civil Aviation Authority in single and night flying to gain actual flying experience during training .",
    "This gives the trainee all the necessary training to become a professional commercial pilot.",
  ];
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
        <Banner />
      </motion.section>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0",
          gap: "7rem",
        }}
      >
        <section id="aboutUs">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <AnimationX dir={1}>
                <TextCard title="About Us" content={aboutUsContent} />
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
              <AnimationX dir={2}>
                <img src={aboutUsImage} alt="about-us image" />
              </AnimationX>
            </Grid>
          </Grid>
        </section>

        <section id="vision&Mission">
          <Grid container spacing={4} rowGap={5}>
            <Grid item xs={12} md={6}>
              <AnimationX dir={1}>
                <TextCard
                  height={true}
                  title="Vision"
                  content="Is to revolutionize & modernize the flight training environment. Is not just about training pilots we are about training; it is about training pilots who stand out among others and are ready for aviation employment."
                />
              </AnimationX>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimationX dir={2}>
                <div className={styles.imageContainer}>
                  <img src={visionImage} alt="vision-image" />
                </div>
              </AnimationX>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimationX dir={1}>
                <div className={styles.imageContainer}>
                  <img src={visionImage} alt="vision-image" />
                </div>
              </AnimationX>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimationX dir={2}>
                <TextCard
                  height={true}
                  title="Mission"
                  content="Ensure the highest safety and security standards by providing the finest and highest modern and advanced training methods theoretically and practically to create a new generation of confident and qualified pilots ready for the aviation career."
                />
              </AnimationX>
            </Grid>
          </Grid>
        </section>

        <section id="studying">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <AnimationX dir={1}>
                <TextCard
                  title="Studying and Training"
                  content={studyingContent}
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
              <AnimationX dir={2}>
                <img src={aboutUsImage} alt="about-us image" />
              </AnimationX>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  );
};

export default Home;
