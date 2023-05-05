import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import styles from "./BannerTwo.module.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import mainBannerImg from "../../assets/images/main-banner-min.png";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom";

interface props {
  // children?: JSX.Element;
  bannerImg?: string;
  bannerTitle?: string;
  bannerHeight?: string;
  activeSectionText?: string;
  activeSectionLink?: string;
  nextSectionText?: string;
  nextSectionLink?: string;
}
const Banner = (props: props) => {
  return (
    <>
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
        <Box
          sx={{
            height: `${props?.bannerHeight ? props?.bannerHeight : "90vh"}`,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              img: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
              "&::after": {
                content: `" "`,
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                background: "rgba(0,0,0,0.5)",
                zIndex: 1,
              },
            }}
          >
            <img
              src={props?.bannerImg ? props?.bannerImg : mainBannerImg}
              alt="banner"
            />

            <Typography
              variant="h1"
              component={"h3"}
              fontWeight="600"
              textAlign="center"
              width={"fit-content"}
              sx={{
                fontFamily: "'Poltawski Nowy', serif",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 2,
                color: "#fff",
                textTransform: "uppercase",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                wordSpacing: ".6rem",
              }}
            >
              {props.bannerTitle}
            </Typography>
          </Box>
        </Box>
        {/* <Banner bannerImg={banner} /> */}
      </motion.section>
    </>
  );
};

export default Banner;
