import React from "react";

import InstructorCard from "../InstructorCard/InstructorCard";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

type Props = {};

const OurTeam = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const { t } = useTranslation();
  return (
    <div
      style={{
        width: "80vw",
      }}
    >
      <Slider {...settings}>
        <InstructorCard
          image="https://flyjeteg.com/wp-content/uploads/2021/12/team1-min.png"
          name={t("ourTeam.1.name")}
          title={t("ourTeam.1.title")}
        />{" "}
        <InstructorCard
          image="https://flyjeteg.com/wp-content/uploads/2021/12/team1-min.png"
          name={t("ourTeam.2.name")}
          title={t("ourTeam.2.title")}
        />{" "}
        <InstructorCard
          image="https://flyjeteg.com/wp-content/uploads/2021/12/team1-min.png"
          name={t("ourTeam.3.name")}
          title={t("ourTeam.3.title")}
        />{" "}
        <InstructorCard
          image="https://flyjeteg.com/wp-content/uploads/2021/12/team1-min.png"
          name={t("ourTeam.4.name")}
          title={t("ourTeam.4.title")}
        />{" "}
        <InstructorCard
          image="https://flyjeteg.com/wp-content/uploads/2021/12/team1-min.png"
          name={t("ourTeam.5.name")}
          title={t("ourTeam.5.title")}
        />{" "}
        <InstructorCard
          image="https://flyjeteg.com/wp-content/uploads/2021/12/team1-min.png"
          name={t("ourTeam.6.name")}
          title={t("ourTeam.6.title")}
        />{" "}
        <InstructorCard
          image="https://flyjeteg.com/wp-content/uploads/2021/12/team1-min.png"
          name={t("ourTeam.7.name")}
          title={t("ourTeam.7.title")}
        />
        <InstructorCard
          image="https://flyjeteg.com/wp-content/uploads/2021/12/team1-min.png"
          name={t("ourTeam.8.name")}
          title={t("ourTeam.8.title")}
        />
      </Slider>
    </div>
  );
};

export default OurTeam;
